import React from "react";
import Link from "next/link";

const NotFound = () => {
  return (
    <div className="md:px-8 mx-auto w-full max-w-screen-xl lg:py-8 mt-10 md:mt-8 mb-20 flex min-h-screen flex-col items-center justify-center">
      <div className="flex flex-col md:flex-row items-center justify-center space-x-10">
        <div>
          <h1 className="font-bold text-green-950 text-9xl">404</h1>
          <p className="font-normal text-black text-xl text-center md:p-0">
            page not found
          </p>
        </div>
        <div className="mt-5 md:mt-0">
          <p className="font-normal text-black text-xl text-center md:text-left">
            The page you are looking for was moved,
          </p>
          <p className="font-normal text-black text-xl text-center md:text-left">
            removed, renamed or might never existed!
          </p>
        </div>
      </div>
      <Link
        href="/"
        className="border-none hover:shadow-lg sm:w-auto p-2 px-3 bg-green-950 text-white rounded-md mt-9"
      >
        Back to home
      </Link>
    </div>
  );
};

export default NotFound;
