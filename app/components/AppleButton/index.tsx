"use client";
import Image from "next/image";
import React from "react";

const AppleButton = ({ label, type }: { label: string; type: string }) => {
  return (
    <button className="rounded-full bg-black semibold items-center w-full py-2.5 inline-flex text-white my-3 text-center hover:bg-stone-900">
      <Image
        alt="apple"
        src="/apple.svg"
        height={25}
        width={25}
        priority
        className="ml-5"
      />
      <p className="mx-auto">{label}</p>
    </button>
  );
};

export default AppleButton;
