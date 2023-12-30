"use client";
import React, { memo } from "react";
import { useFormStatus } from "react-dom";
import Spinner from "../Spinner";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
}
const PaymentButton = memo((props: ButtonProps) => {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="bg-green-250 rounded-full font-semibold items-center w-full py-2.5 inline-flex justify-center my-3 disabled:bg-neutral-300 disabled:bg-slate-20 transition-colors duration-300 ease-in-out hover:text-white disabled:text-gray-200 hover:bg-green-1000"
      aria-disabled={pending}
      {...props}
    >
      {pending ? <Spinner /> : props.label}
    </button>
  );
});
PaymentButton.displayName = "PaymentButton";

export default PaymentButton;
