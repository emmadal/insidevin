import React from "react";
import clipboard from "@/public/clipboard-black.svg";
import Image from "next/image";
import { VehicleUsageType } from "@/app/types";

interface Props {
  data: VehicleUsageType[];
}

const VehicleUsage = ({ data }: Props) => {
  return (
    <div className="w-full">
      <div className="grid grid-cols-4 md:gap-8 mt-20">
        <div className="col-span-3">
          <div className="flex flex-wrap text-xl flex-row items-center font-semibold p-2">
            <Image
              src={clipboard}
              alt="clipboard-text"
              className="mr-2 h-6 w-6"
              sizes="100vw"
            />
            Vehicle Usage Record
          </div>
        </div>
        <div className="bg-teal-100 rounded-md p-1 flex flex-col justify-center text-center">
          {data.filter((i) => i.isrecord === true).length} usage(s) found
        </div>
      </div>
      <p className="ml-3 text-sm mt-2">The vehicle has lease usage records</p>

      <div className="space-y-2 md:space-y-0 md:grid grid-cols-3 gap-4 mt-5">
        {data.map(({ title, isrecord }) => (
          <div
            className={
              isrecord
                ? "bg-red-300 border border-black rounded-md shadow-md p-5 text-center"
                : "border border-black rounded-md shadow-md p-5 text-center"
            }
            key={title}
          >
            <p className="font-semibold">{title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VehicleUsage;
