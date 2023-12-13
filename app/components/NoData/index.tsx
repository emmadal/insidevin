import Link from "next/link";
import React from "react";
import Image from "next/image";

const NoData = ({ vin }: { vin: string }) => {
  return (
    <div className="grid place-items-center">
      <Image
        src="/notfound.svg"
        alt="Not found"
        sizes="100vw"
        height={500}
        width={500}
        className=" -mb-20"
      />
      <h1 className="text-2xl font-semibold dark:text-white">
        The #{vin} VIN Car Number
      </h1>
      <h1 className=" text-2xl font-semibold dark:text-white">
        doesn&#39;t have any data registered for the report
      </h1>
      <Link href="/dashboard" className="underline font-normal mt-9 mx-auto">
        Back
      </Link>
    </div>
  );
};

export default NoData;
