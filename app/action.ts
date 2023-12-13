"use server";
import { vinSchema, userSchema, EmailValidation } from "./schema";
import { v4 as uuidv4 } from "uuid";
import { render } from "@react-email/render";
import { firestore } from "firebase-admin";
import * as bcrypt from "bcrypt";
import { revalidateTag } from "next/cache";
import * as jwt from "jsonwebtoken";
import { transporter, mailOptions } from "@/lib/mail-sender";
import ResetPasswordTemplate from "@/emails/ResetPasswordTemplate";

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
  if (!validation.success) {
    return { message: validation.error.errors[0].message };
  }
  const response = await fetch(
    `https://api.vehicledatabases.com/report/${validation.data.vin}`,
    {
      method: "GET",
      cache: "no-store",
      headers: new Headers({
        "x-AuthKey": process.env.VEHICLE_API_KEY!,
      }),
      next: { tags: ["vin"] },
    },
  );
  if (response.ok) {
    const data = await response.json();
    revalidateTag("vin");
    return { status: true, vin: validation.data.vin, data };
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

export const reportForm = (formData: FormData) => {
  console.log(formData.get("email"));
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
