"use client";
import Image from "next/image";
import React from "react";

const FacebookButton = ({ label, type }: { label: string; type: string }) => {
  return (
    <button className="bg-blue-500 rounded-full font-semibold items-center w-full py-2.5 hover:bg-blue-600 inline-flex justify-center text-white my-3">
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
