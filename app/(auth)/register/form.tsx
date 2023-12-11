"use client";
import React, { useRef, useState } from "react";
import SubmitButton from "@/app/components/FormButton";
import TextInput from "@/app/components/TextInput";
import { useFormState } from "react-dom";
import { createUser } from "@/app/action";
import Link from "next/link";
import { useRouter } from "next/navigation";

const RegisterForm = () => {
  const [response, formAction] = useFormState(createUser, null);
  const [checked, setChecked] = useState(false);
  const router = useRouter();
  const ref = useRef<HTMLFormElement>(null);
  if (response?.success) {
    setTimeout(() => {
      router.push("/login");
    }, 2000);
  }
  return (
    <div>
      <form ref={ref} action={formAction}>
        <TextInput type="text" name="first_name" label="First Name" />
        <TextInput type="text" name="surname" label="Surname" />
        <TextInput type="email" name="email" label="Your Email" />
        <TextInput type="password" name="password" label="Your Password" />
        <TextInput
          type="password"
          name="confirm_password"
          label="Confirm password"
        />
        <SubmitButton label="Submit" type="submit" disabled={!checked} />
        <div className="flex flex-row items-center space-x-2 mt-4">
          <input
            type="checkbox"
            name="check"
            defaultChecked={checked}
            onChange={(e) => setChecked(e.target.checked)}
            className="checked:bg-blue-600 h-4 w-4 rounded-full accent-green-250"
          />
          <span className="font-normal text-base">
            I agree{" "}
            <Link href="/terms" className="text-blue-600">
              terms & conditions
            </Link>
          </span>
        </div>
      </form>
      {response?.success ? (
        <p className="text-green-600 text-base font-normal text-justify my-3">
          {response?.message}
        </p>
      ) : (
        <p className="text-red-500 text-sm font-normal text-justify my-3">
          {response?.message}
        </p>
      )}
    </div>
  );
};

export default RegisterForm;
