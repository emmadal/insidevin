"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeftIcon } from "@radix-ui/react-icons";
import { signOut } from "next-auth/react";

const LogoutButton = () => {
  return (
    <Button onClick={() => signOut()} className="w-2/4">
      <ArrowLeftIcon className="mr-2 h-4 w-4" /> Log out
    </Button>
  );
};

export default LogoutButton;
