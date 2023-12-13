import React from "react";
import { checkResetPasswordLink } from "@/app/action";
import Link from "next/link";
import Image from "next/image";
import ResetPasswordForm from "./form";
import logo_light from "@/public/logo_light.svg";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authoptions";

interface IParams {
  params: { token: string };
}
const ResetPassword = async ({ params: { token } }: IParams) => {
  // check if user is authenticated
  const session = await getServerSession(authOptions);
  if (session?.user) redirect("/dashboard");

  const check = checkResetPasswordLink(token);

  return check.status ? (
    <div className="border-white border-2 shadow-xl px-16 mx-5 md:mx-auto overflow-hidden bg-white rounded-xl md:w-[420px]">
      <div className="flex justify-center items-center">
        <Link href="/">
          <Image src={logo_light} alt="Logo" sizes="100vw" />
        </Link>
      </div>
      <p className="font-bold text-xl text-center">Reset password</p>
      <div className="pb-10 pt-5">
        <ResetPasswordForm email={check?.payload?.email} />
        <div className="w-full text-center my-3">
          <Link
            href="/login"
            className="font-normal underline text-sm text-gray-500 text-center"
          >
            Cancel process
          </Link>
        </div>
      </div>
    </div>
  ) : (
    <div className="pb-10 pt-5 text-center">
      <div className="flex justify-center items-center mx-auto">
        <Link href="/">
          <Image src={logo_light} alt="Logo" sizes="100vw" />
        </Link>
      </div>
      <p className="font-semibold text-xl text-red-500 my-10 md:w-3/4 mx-auto">
        {check?.message}
      </p>
      <Link
        href="/forgot-password"
        className="font-normal underline text-base text-center"
      >
        Back
      </Link>
    </div>
  );
};

export default ResetPassword;
