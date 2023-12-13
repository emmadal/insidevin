"use client";
import React, { useRef } from "react";
import SubmitButton from "@/app/components/FormButton";
import TextInput from "@/app/components/TextInput";
import { useFormState } from "react-dom";
import { updateUserPassword } from "@/app/action";
import { useRouter } from "next/navigation";

const ResetPasswordForm = ({ email }: { email: string }) => {
  const ref = useRef<HTMLFormElement>(null);
  const [response, formAction] = useFormState(updateUserPassword, null);
  const color = response?.status ? "text-green-600" : "text-red-500";
  const router = useRouter();

  if (response?.status) {
    setTimeout(() => {
      router.push("/login");
    }, 2000);
  }

  return (
    <div>
      <form ref={ref} action={formAction}>
        <TextInput
          type="password"
          name="password"
          label="New Password"
          required
        />
        <TextInput
          type="password"
          name="confirm_password"
          label="Confirm Password"
          required
        />
        <TextInput type="hidden" name="email" value={email} />
        <SubmitButton label="Reset Password" ref={ref} />
      </form>
      <p className={`${color} text-base font-semibold text-justify my-2`}>
        {response?.message}
      </p>
    </div>
  );
};

export default ResetPasswordForm;
