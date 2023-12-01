import z from "zod";

export const vinSchema = z.object({
  vin: z
    .string()
    .min(17, "VIN length less than 17 characters")
    .max(17, "VIN CAR can contain only 17 characters.")
    .regex(/^[A-Za-z0-9]+$/, "Only alphabetics and numbers are allowed for VIN CAR")
    .trim(),
});
