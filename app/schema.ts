import z from "zod";

export const vinSchema = z.object({
  vin: z
    .string()
    .min(17, "VIN length less than 17 characters")
    .max(17, "VIN CAR can contain only 17 characters.")
    .regex(
      /^[A-Za-z0-9]+$/,
      "Only alphabetics and numbers are allowed for VIN CAR",
    )
    .trim(),
});

export const userSchema = z
  .object({
    email: z.string().email("Please use a valid email").toLowerCase().trim(),
    first_name: z
      .string()
      .min(3, "« first name	» min length must contain 3 characters")
      .max(20, "« first name	» max length must contain 20 characters")
      .toLowerCase()
      .trim(),
    surname: z
      .string()
      .min(3, "« surname	» min length must contain 3 characters")
      .max(20, "« surname	» max length must contain 20 characters")
      .toLowerCase()
      .trim(),
    password: z
      .string()
      .regex(
        new RegExp(/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{6,}$/),
        "password should contain: at least one digit, at least one lower case, at least one uppercase case, at least 6 from the mentioned characters, at least one special characters",
      )
      .trim(),
    confirm_password: z
      .string()
      .regex(
        new RegExp(/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{6,}$/),
        "password should contain: at least one digit, at least one lower case, at least one uppercase case, at least 6 from the mentioned characters, at least one special characters",
      ),
  })
  .refine((data) => data.password === data.confirm_password, {
    message: "Passwords don't match",
  });
