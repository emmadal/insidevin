"use server";
import { vinSchema } from "./schema";

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
