"use server";
import {
  vinSchema,
  userSchema,
  EmailValidation,
  passwordSchema,
} from "./schema";
import { v4 as uuidv4 } from "uuid";
import { render } from "@react-email/render";
import { firestore } from "firebase-admin";
import * as bcrypt from "bcrypt";
import { revalidateTag } from "next/cache";
import * as jwt from "jsonwebtoken";
import { cookies } from "next/headers";
import { transporter, mailOptions } from "@/lib/mail-sender";
import ResetPasswordTemplate from "@/emails/ResetPasswordTemplate";
import { redirect } from "next/navigation";

/**
 * Search user by email
 */
export const searchUserByEmail = async (email: string) => {
  const user = await (
    await firestore().collection("users").where("email", "==", email).get()
  ).docs[0]?.data();
  if (user) return user;
  return false;
};

/**
 * Get document ID
 */
export const getDocumentId = async (
  collectionName: string,
  key: string,
  value: any,
) => {
  const docRef = await (
    await firestore().collection(collectionName).where(key, "==", value).get()
  ).docs[0].id;
  if (docRef) return docRef;
  return false;
};

export const getInTouchForm = (formData: FormData) => {
  const email = formData.get("email");
  console.log(email);
};

/**
 * Search Vin car
 */
export const searchVin = async (prevState: any, formData: FormData) => {
  const validation = vinSchema.safeParse({
    vin: formData.get("vin"),
  });
  // get user session
  const userFormData: any = formData.get("session");
  const session = JSON.parse(userFormData);
  if (!validation.success) {
    return { message: validation.error.errors[0].message };
  }
  const response = await fetch(
    `https://api.vehicledatabases.com/saleshistory/${validation.data.vin}`,
    {
      method: "GET",
      cache: "no-store",
      headers: new Headers({
        "x-AuthKey": process.env.VEHICLE_SALES_HISTORY || "",
      }),
      next: { tags: ["vin"] },
    },
  );
  if (response.ok) {
    const data = await response.json();
    if (session?.user) {
      // Set cookie
      cookies().set("sales_history", JSON.stringify(data?.data), {
        secure: process.env.NODE_ENV === "production",
        httpOnly: true,
        sameSite: "lax",
        // maxAge: 60 * 5, // expires after 2 min
      });
      const { _id, make, ...rest } = data?.data;
      await firestore()
        .collection("sales_history")
        .add({
          ...rest,
          brand: make,
          user_email: session?.user?.email,
          user_id: session?.user?.id,
          id: _id,
        });
    }
    revalidateTag("vin");
    redirect(`reports/${validation.data.vin}`);
  }
  return { status: false, message: "No data available" };
};

/**
 * Registered a new user
 */
export const createUser = async (prevState: any, formData: FormData) => {
  try {
    const validation = userSchema.safeParse({
      email: formData.get("email"),
      password: formData.get("password"),
      first_name: formData.get("first_name"),
      surname: formData.get("surname"),
      confirm_password: formData.get("confirm_password"),
    });
    if (!validation.success) {
      return { message: validation.error.errors[0].message };
    }
    // check if user exist with same email
    const userRef = await (
      await firestore()
        .collection("users")
        .where("email", "==", validation?.data?.email)
        .get()
    ).docs[0]?.data();
    if (userRef) {
      return { status: false, message: "Email or password already used" };
    }

    // create a new user
    const hashedPassword = await bcrypt.hash(
      validation.data.confirm_password,
      10,
    );
    const new_user = await firestore()
      .collection("users")
      .add({
        email: validation.data.email,
        name: `${validation.data.first_name} ${validation.data.surname}`,
        emailVerified: false,
        image: null,
        password: hashedPassword,
        id: uuidv4(),
      });
    if (new_user.id) {
      return {
        success: true,
        message: "Account created with success. You will be redirect on login",
      };
    }
    return { message: "Email or password already used" };
  } catch (error) {
    console.log(error);
    return { message: "User registration failed. Try later" };
  }
};

/**
 * Send link to reset password
 */
export const sendResetPasswordLink = async (
  prevState: any,
  formData: FormData,
) => {
  const validation = EmailValidation.safeParse({
    email: formData.get("email"),
  });
  if (!validation.success)
    return { message: validation.error.errors[0].message };
  const user = await searchUserByEmail(validation.data.email);
  if (!user) {
    return { message: "Email doesn't exist. Please try again" };
  }
  const token = jwt.sign({ email: user?.email }, process.env.NEXTAUTH_SECRET!, {
    expiresIn: "5min",
    algorithm: "HS256",
  });
  const url =
    process.env.NODE_ENV === "production"
      ? process.env.VERCEL_URL
      : process.env.NEXTAUTH_URL;
  const link = `${url}/reset-password/${token}`;
  await transporter.sendMail({
    ...mailOptions,
    to: user?.email,
    subject: "Reset password",
    html: render(ResetPasswordTemplate({ link })),
  });
  return { status: true, message: "Magic link to reset password sent" };
};

/**
 * Check link for reset password
 */
export const checkResetPasswordLink = (token: string) => {
  interface Response {
    status: boolean;
    message: string;
    payload?: any;
  }
  let response!: Response;
  jwt.verify(token, process.env.NEXTAUTH_SECRET!, (err, decoded) => {
    if (err) {
      response = {
        status: false,
        message:
          "Invalid or expired link. Please request a new one to reset your password",
      };
    } else {
      const value = jwt.decode(token, {
        complete: true,
      });
      response = {
        status: true,
        message: "valid link",
        payload: value?.payload,
      };
    }
  });
  return response;
};

/**
 * Update user password
 */
export const updateUserPassword = async (
  prevState: any,
  formData: FormData,
) => {
  const validation = passwordSchema.safeParse({
    password: formData.get("password"),
    confirm_password: formData.get("confirm_password"),
  });
  if (!validation.success) {
    return { status: false, message: validation.error.errors[0].message };
  }
  const email = formData.get("email") as string;
  const newPassword = formData.get("password") as string;

  const [user, docRef] = await Promise.all([
    searchUserByEmail(email),
    getDocumentId("users", "email", email),
  ]);
  if (user && docRef) {
    const hashedPassword = await bcrypt.hash(newPassword, 10);
    await firestore().collection("users").doc(docRef).update({
      password: hashedPassword,
    });
    return {
      status: true,
      message: "Password reset. You will be redirect in few seconds",
    };
  }
  return { status: false, message: "Unable to reset your password. Try later" };
};

/**
 * Get data by user email user
 */
export const getAllDataByUserEmail = async (
  collection: string,
  email: string | null,
) => {
  const data = await firestore()
    .collection(collection)
    .where("user_email", "==", email)
    .get();
  const response = data.docs.map((e) => e.data());
  return response;
};

/**
 * Save data into collection
 */
export const saveData = async (collection: string, data: any) => {
  try {
    await firestore().collection(collection).add(data);
    return true;
  } catch (error) {
    return false;
  }
};
