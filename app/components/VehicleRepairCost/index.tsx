import React from "react";
import clipboard from "@/public/clipboard-black.svg";
import Image from "next/image";
import { VehicleRepairCostType } from "@/app/types";

interface Props {
  data: VehicleRepairCostType[];
}
const VehicleRepairCost = ({ data }: Props) => {
  return (
    <div className="w-full mt-10">
      <div className="grid grid-cols-4 md:gap-8">
        <div className="col-span-3">
          <div className="flex flex-wrap text-xl flex-row items-center font-semibold p-2">
            <Image
              src={clipboard}
              alt="clipboard-text"
              className="mr-2 h-6 w-6"
              sizes="100vw"
            />
            Repair Costs
          </div>
        </div>
        <div className="bg-teal-100 rounded-md p-1 flex flex-col justify-center text-center">
          {data.length} record(s) found
        </div>
      </div>
      <p className="ml-3 text-sm mt-2">
        This section shows repairs you may want to perform on your vehicle and
        its estimated costs
      </p>
      {data.map(({ title, id, description, parts, labor }) => (
        <div
          className="w-full rounded-md border border-black p-5 space-y-5 my-5"
          key={id}
        >
          <div className="flex flex-row items-center flex-wrap justify-between">
            <p className="font-semibold text-base">{title}</p>
            <div className="flex flex-row items-center flex-wrap justify-between space-x-3">
              <div className="bg-teal-100 rounded-full p-2">
                <p className="text-center text-sm">{parts}</p>
              </div>
              <div className="bg-teal-100 rounded-full p-2">
                <p className="text-center text-sm">{labor}</p>
              </div>
            </div>
          </div>
          <p className="text-sm text-black">{description}</p>
        </div>
      ))}
    </div>
  );
};

export default VehicleRepairCost;
