"use server";
import { vinSchema, userSchema } from "./schema";
import { v4 as uuidv4 } from "uuid";
import { firestore } from "firebase-admin";
import * as bcrypt from "bcrypt";

export const getInTouchForm = (formData: FormData) => {
  const email = formData.get("email");
  console.log(email);
};

export const searchVin = async (prevState: any, formData: FormData) => {
  try {
    const validation = vinSchema.safeParse({
      vin: formData.get("vin"),
    });
    if (!validation.success) {
      return { message: validation.error.errors[0].message };
    }
    const response = await fetch(
      `https://api.vehicledatabases.com/report/${validation.data.vin}`,
      {
        cache: "no-store",
        headers: new Headers({
          "x-AuthKey": process.env.VEHICLE_API_KEY!,
        }),
      },
    );
    if (response.ok) {
      const reports = await response.json();
      console.log(reports);
    }
    return { message: "VIN not found" };
  } catch (error) {
    return { message: "No data available" };
  }
};

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
