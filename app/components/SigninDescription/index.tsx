import Link from "next/link";
import React from "react";

const SigninDescription = () => {
  return (
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
  );
};

export default SigninDescription;
