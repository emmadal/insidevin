"use client";
import React from "react";
import Spinner from "../Spinner";
import { Button } from "@/components/ui/button";
import { useFormStatus } from "react-dom";

const DownloadReport = () => {
  const { pending } = useFormStatus();
  return (
    <Button
      className="bg-green-400 text-black text-sm font-light disabled:bg-neutral-300 disabled:bg-slate-20 transition-colors duration-300 ease-in-out hover:text-white disabled:text-gray-200 hover:bg-green-1000"
      size="sm"
      disabled={pending}
      aria-disabled={pending}
    >
      {pending ? <Spinner /> : "Download Report"}
    </Button>
  );
};

export default DownloadReport;
