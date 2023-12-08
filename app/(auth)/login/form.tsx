"use client";
import React, { useRef, useState } from "react";
import SubmitButton from "@/app/components/FormButton";
import TextInput from "@/app/components/TextInput";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

const LoginForm = () => {
  const email = useRef("");
  const password = useRef("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const ref = useRef<HTMLFormElement>(null);
  const router = useRouter();

  const handleSubmit = async () => {
    setLoading(true);
    const res = await signIn("credentials", {
      email: email.current,
      password: password.current,
      redirect: false,
      callbackUrl: "/dashboard/",
    });
    if (!res?.ok) {
      setLoading(false);
      setError("Email or password incorrect");
      return;
    }
    setLoading(false);
    router.push(res?.url!);
  };

  return (
    <div>
      <form ref={ref}>
        <TextInput
          type="email"
          name="email"
          label="Your Email"
          required
          onChange={(e) => (email.current = e.target.value)}
        />
        <TextInput
          type="password"
          name="password"
          required
          label="Your Password"
          onChange={(e) => (password.current = e.target.value)}
        />
        <SubmitButton
          label="Log In"
          disabled={loading}
          onClick={async (e) => {
            e.preventDefault();
            handleSubmit();
          }}
        />
      </form>
      {error && (
        <p className="text-red-500 text-sm font-normal text-justify my-2">
          {error}
        </p>
      )}
    </div>
  );
};

export default LoginForm;
