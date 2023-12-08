import React from "react";
import Image from "next/image";
import Link from "next/link";
import GoogleButton from "@/app/components/GoogleButton";
import FacebookButton from "@/app/components/FacebookButton";
import LoginForm from "./form";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

const LoginPage = async () => {
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
      <p className="font-bold text-xl text-center mt-5">Log In</p>
      <div className="pb-10 pt-5">
        <div>
          <FacebookButton label="Log In with Facebook" />
          <GoogleButton label="Log In with Google" />
        </div>
        <div className="relative flex pt-5 items-center">
          <div className="flex-grow border-t border-gray-200"></div>
          <span className="flex-shrink mx-4 text-black">Or</span>
          <div className="flex-grow border-t border-gray-200"></div>
        </div>
        <LoginForm />
        <div className="flex flex-col justify-center items-center space-y-5 mt-10">
          <Link
            href="/forgot-password"
            className="font-normal text-sm underline text-gray-500"
          >
            Forgot your password?
          </Link>
          <span className="flex-row flex flex-wrap justify-center">
            <p className="mr-2 text-sm">New to InsideVin?</p>
            <Link
              href="/register"
              className="font-normal underline text-sm text-gray-500"
            >
              Create a free account
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
