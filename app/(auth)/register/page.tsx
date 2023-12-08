import React from "react";
import Image from "next/image";
import Link from "next/link";
import GoogleButton from "@/app/components/GoogleButton";
import FacebookButton from "@/app/components/FacebookButton";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import RegisterForm from "./form";
import { getServerSession } from "next-auth";

const RegisterPage = async () => {
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
      <p className="font-bold text-xl text-center mt-5">Register</p>
      <div className="pb-10 pt-5">
        <div>
          <FacebookButton label="Sign up with Facebook" />
          <GoogleButton label="Sign up with Google" />
        </div>
        <div className="relative flex pt-5 items-center">
          <div className="flex-grow border-t border-gray-200"></div>
          <span className="flex-shrink mx-4 text-black">Or</span>
          <div className="flex-grow border-t border-gray-200"></div>
        </div>
        <RegisterForm />

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

export default RegisterPage;
