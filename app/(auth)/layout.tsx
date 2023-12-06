import React from "react";
import Link from "next/link";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="grid grid-cols-1 place-content-center min-h-screen pt-20">
      {children}
      <div className="text-center my-10">
        <p className=" text-gray-500 text-sm">
          {" "}
          This site is protected by reCAPTCHA and the Google{" "}
          <Link href="/privacy-policy" className="underline">
            Privacy Policy
          </Link>{" "}
          and{" "}
          <Link href="/terms" className="underline">
            Terms of Service
          </Link>{" "}
          apply.
        </p>
        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()} InsideVin. All rights reserved.
        </p>
      </div>
    </div>
  );
}
