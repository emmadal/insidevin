"use client";
import Image from "next/image";
import React from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

interface IPropsIButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
}

const GoogleButton = ({ label, ...props }: IPropsIButtonProps) => {
  const router = useRouter();
  const handleClick = async () => {
    const res = await signIn("google", {
      redirect: false,
      callbackUrl: "/dashboard/",
    });
    if (!res?.ok) return;
    router.replace(res?.url!);
  };
  return (
    <button
      className="rounded-full bg-gray-100 font-semibold items-center w-full py-2.5 hover:bg-gray-300 inline-flex justify-center text-black my-3"
      {...props}
      onClick={handleClick}
    >
      <Image
        alt="google"
        src="/google.svg"
        height={25}
        width={25}
        priority
        className="ml-5"
      />
      <span className="mx-auto">{label}</span>
    </button>
  );
};

export default GoogleButton;
