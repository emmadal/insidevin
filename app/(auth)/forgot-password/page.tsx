import React from "react";
import Image from "next/image";
import Link from "next/link";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/lib/authoptions";
import ForgortPasswordForm from "./form";

const ForgotPasswordPage = async () => {
  // check if user is authenticated
  const session = await getServerSession(authOptions);
  if (session?.user) redirect("/dashboard");

  return (
    <div className="border-white border-2 shadow-xl px-16 mx-5 sm:mx-auto overflow-hidden bg-white rounded-xl mt-10">
      <div className="flex justify-center items-center">
        <Link href="/">
          <Image
            src="/logo_light.svg"
            alt="Logo"
            width={200}
            height={200}
            sizes="100vw"
            priority
          />
        </Link>
      </div>
      <p className="font-bold text-xl text-center mt-5">Forgot password</p>
      <div className="pb-10 pt-5">
        <ForgortPasswordForm />
        <div className="flex-row flex flex-wrap justify-center mt-5">
          <p className="mr-2 text-sm text-gray-500">Already have an account?</p>
          <Link
            href="/login"
            className="font-normal underline text-sm text-gray-500"
          >
            Log in
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
