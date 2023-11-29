"use server";

export const getInTouchForm = (formData: FormData) => {
  const email = formData.get("email");
  console.log(email);
};
