"use client";
import React from "react";
import Spinner from "../Spinner";
import { useFormStatus } from "react-dom";

const SubmitButton = ({ text }: { text: string }) => {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="bg-green-250 rounded-full font-semibold items-center w-full py-2.5 inline-flex justify-center text-white my-3 disabled:bg-neutral-300 disabled:bg-slate-20"
      aria-disabled={pending}
    >
      {pending ? <Spinner /> : text}
    </button>
  );
};

export default SubmitButton;