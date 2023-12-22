"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

const BackToHome = () => {
  const router = useRouter();
  return (
    <Button
      onClick={() => router.replace("/")}
      className="border-none hover:shadow-lg sm:w-auto p-2 px-3 bg-green-950 text-white rounded-md animate-pulse hover:animate-none mt-9"
    >
      Back to home
    </Button>
  );
};

export default BackToHome;
