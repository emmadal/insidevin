"use client";
import { Button } from "@/components/ui/button";
import { ArrowLeftIcon } from "@radix-ui/react-icons";
import { signOut } from "next-auth/react";
import React from "react";

const LogoutButton = () => {
  return (
    <Button onClick={() => signOut({ callbackUrl: "/" })}>
      <ArrowLeftIcon className="mr-2 h-4 w-4" /> Log out
    </Button>
  );
};

export default LogoutButton;
