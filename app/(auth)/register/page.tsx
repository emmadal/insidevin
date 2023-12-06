import React from "react";
import Image from "next/image";
import Link from "next/link";
import Input from "@/app/components/Input";
import SubmitButton from "@/app/components/SubmitButton";
import GoogleButton from "@/app/components/GoogleButton";
import FacebookButton from "@/app/components/FacebookButton";
import AppleButton from "@/app/components/AppleButton";
import SignupDescription from "@/app/components/SignupDescription";

const RegisterPage = () => {
  return (
    <div>
      <div className="flex justify-center items-center">
        <Link href="/">
          <Image src="/logo.png" alt="Logo" width={110} height={110} priority />
        </Link>
      </div>
      <div className="border-white border-2 shadow-xl px-16 mx-5 sm:mx-auto md:w-1/3 overflow-hidden bg-white rounded-xl mt-10">
        <p className="font-bold text-xl text-center mt-5">
          Create a new account
        </p>
        <div className="pb-10 pt-5">
          <div>
            <FacebookButton label="Sign up with Facebook" type="register" />
            <GoogleButton label="Sign up with Google" type="register" />
            <AppleButton label="Sign up with Apple" type="register" />
          </div>
          <div className="relative flex pt-5 items-center">
            <div className="flex-grow border-t border-gray-200"></div>
            <span className="flex-shrink mx-4 text-black">Or</span>
            <div className="flex-grow border-t border-gray-200"></div>
          </div>
          <form action="">
            <Input type="email" name="email" label="Your Email" />
            <Input type="password" name="password" label="Your Password" />
            <SubmitButton text="Sign up" />
            <SignupDescription />
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
