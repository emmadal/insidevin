import Image from "next/image";
import React from "react";
import woman2 from "@/public/woman2.svg"
const Trusted = () => {
  return (
    <div>
      <hr className="mb-3" />
      <div className="flex flex-col md:flex-row justify-center items-center space-x-2">
        <div className="inline-flex mb-3 md:mb-0">
          <Image
            src="/woman2.svg"
            alt="woman"
            height={30}
            width={30}
            className="bg-transparent z-1 -mr-2"
          />
          <Image
            src="/man.svg"
            alt="man"
            height={30}
            width={30}
            className="z-5 bg-transparent"
          />
          <Image
            src="/woman1.svg"
            alt="woman"
            height={30}
            width={30}
            className="bg-transparent -ml-2 z-0"
          />
        </div>
        <div>
          <p className="text-gray-500 text-sm">
            Trusted globally by{" "}
            <strong className="text-black font-bold">1,000,000+</strong> users
            across{" "}
          </p>
          <p className="text-gray-500 text-sm">
            <strong className="text-black font-bold">150+</strong> nations
          </p>
        </div>
      </div>
      <hr className="mt-3" />
    </div>
  );
};

export default Trusted;
