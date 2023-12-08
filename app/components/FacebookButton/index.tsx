"use client";
import { signIn } from "next-auth/react";
import Image from "next/image";
import React from "react";

interface IPropsIButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
}

const FacebookButton = ({ label, ...props }: IPropsIButtonProps) => {
  return (
    <button
      className="bg-blue-500 rounded-full font-semibold items-center w-full py-2.5 hover:bg-blue-600 inline-flex justify-center text-white my-3"
      {...props}
      onClick={() =>
        signIn('facebook', { redirect: true, callbackUrl: "/dashboard/" })
      }
    >
      <Image
        alt="facebook"
        src="/facebook_login.svg"
        height={25}
        width={25}
        priority
        className="ml-5"
      />
      <span className="mx-auto">{label}</span>
    </button>
  );
};

export default FacebookButton;
