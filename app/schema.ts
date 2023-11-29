import z from "zod";

export const vinSchema = z.object({
  vin: z
    .string()
    .min(17, "VIN length less than 17 characters")
    .max(17, "VIN CAR can contain only 17 digits.")
    .regex(/^[1-9]\d{14,17}$/, "Only number is allowed for VIN CAR")
    .trim(),
});
