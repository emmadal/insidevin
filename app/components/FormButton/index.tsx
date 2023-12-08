"use client";
import React from "react";
import Spinner from "../Spinner";
import { useFormStatus } from "react-dom";

interface IPropsIButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
}
const SubmitButton = ({ label, ...props }: IPropsIButtonProps) => {
  const { pending } = useFormStatus();
  return (
    <button
      {...props}
      disabled={pending}
      className="bg-green-250 rounded-full font-semibold items-center w-full py-2.5 inline-flex justify-center my-3 disabled:bg-neutral-300 disabled:bg-slate-20 transition-colors duration-300 ease-in-out hover:text-white disabled:text-gray-200 hover:bg-green-1000"
      aria-disabled={pending}
      {...props}
    >
      {pending ? <Spinner /> : label}
    </button>
  );
};

export default SubmitButton;
