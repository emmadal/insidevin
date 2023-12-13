"use client";
import React, { useRef } from "react";
import SubmitButton from "@/app/components/FormButton";
import TextInput from "@/app/components/TextInput";
import { useFormState } from "react-dom";
import { sendResetPasswordLink } from "@/app/action";

const ForgortPasswordForm = () => {
  const ref = useRef<HTMLFormElement>(null);
  const [response, formAction] = useFormState(sendResetPasswordLink, null);
  const color = response?.status ? "text-green-600" : "text-red-500";
  return (
    <div>
      <form ref={ref} action={formAction}>
        <TextInput type="email" name="email" label="Your Email" required />
        <SubmitButton label="Send Link" ref={ref} />
      </form>
      <p className={`${color} text-sm font-normal text-justify my-2`}>
        {response?.message}
      </p>
    </div>
  );
};

export default ForgortPasswordForm;
