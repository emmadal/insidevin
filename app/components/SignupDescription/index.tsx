import Link from "next/link";
import React from "react";

const SignupDescription = () => {
  return (
    <div className="flex-row flex flex-wrap justify-center mt-5">
      <p className="mr-2 text-sm text-gray-500">Already have an account?</p>
      <Link
        href="/register"
        className="font-normal underline text-sm text-gray-500"
      >
        Log in
      </Link>
    </div>
  );
};

export default SignupDescription;
