"use client";

import React from "react";

interface Props {
  error: Error & { digest: string };
  reset: () => void;
}
const Error = ({ error, reset }: Props) => {
  return (
    <div className="md:px-8 mx-auto w-full max-w-screen-xl lg:py-8 mt-10 md:mt-8 mb-20 flex min-h-screen flex-col items-center justify-center">
      <div className="flex flex-col md:flex-row items-center justify-center space-x-10">
        <div>
          <h1 className="font-bold text-green-950 text-9xl">500</h1>
          <p className="font-normal text-black text-xl text-center md:p-0">
            Internal server error
          </p>
        </div>
        <div className="mt-5 md:mt-0">
          <p className="font-normal text-black text-xl text-center md:text-left">
            Something went wrong at out end.
          </p>
          <p className="font-normal text-black text-xl text-center md:text-left">
            Don&#39;t worry, it&apos;s not you - it&apos;s us.
          </p>
          <p className="font-normal text-black text-xl text-center md:text-left">
            Sorry about that.
          </p>
        </div>
      </div>

      <button
        className="border-none hover:shadow-lg sm:w-auto p-2 px-3 bg-green-950 text-white rounded-md mt-9"
        onClick={() => reset()}
      >
        Refresh
      </button>
    </div>
  );
};

export default Error;
