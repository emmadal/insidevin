'use client'
import Image from "next/image";
import React from "react";

const GoogleButton = ({ label, type }: { label: string; type: string }) => {
  return (
    <button className="rounded-full bg-gray-100 font-semibold items-center w-full py-2.5 hover:bg-gray-300 inline-flex justify-center text-black my-3">
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
