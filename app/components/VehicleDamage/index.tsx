import React from "react";
import clipboard from "@/public/clipboard-black.svg";
import Image from "next/image";
import { VehicleDamageType } from "@/app/types";

const VehicleDamage = ({ data }: { data: VehicleDamageType[] }) => {
  return (
    <div className="w-full mt-10">
      <div className="grid grid-cols-4 md:gap-8 md:space-x-3">
        <div className="col-span-3">
          <div className="flex flex-wrap text-xl flex-row items-center font-semibold p-2">
            <Image
              src={clipboard}
              alt="clipboard-text"
              className="mr-2 h-6 w-6"
              sizes="100vw"
            />
            Damage Verification
          </div>
        </div>
        <div className="bg-teal-100 rounded-md p-1 flex flex-col justify-center text-center">
          {data.filter(i => i.isrecord === true).length} record(s) found
        </div>
      </div>
      <div className="space-y-2 md:space-y-0 md:grid grid-cols-3 gap-4 mt-5">
        {data.map(({ title, description, isrecord }) => (
          <div
            className={
              isrecord
                ? "border border-black rounded-md shadow-md p-5 bg-red-300"
                : "border border-black rounded-md shadow-md p-5"
            }
            key={title}
          >
            <div className="rounded-full h-8 w-8 border-none bg-green-250 flex flex-col justify-center items-center mb-2">
              <Image
                src={clipboard}
                alt="clipboard-text"
                className="h-5 w-5"
                sizes="100vw"
              />
            </div>
            <p className="font-semibold">{title}</p>
            <p className="text-sm font-light mt-2">{description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VehicleDamage;
