import React from "react";
import { VehicleInformationType } from "@/app/types";

interface Props {
  data: VehicleInformationType;
}
const VehicleInformation = ({ data }: Props) => {
  return (
    <div className="w-full mt-10">
      <p className="text-xl font-semibold p-2">Vehicle Information</p>
      <div className="flex w-full flex-col items-stretch border border-black rounded-md overflow-auto mt-5">
        <div className="flex w-[392px] max-w-full justify-between gap-5 ml-6 self-start items-start max-md:ml-2.5 pt-7">
          <div className="text-black font-semibold">Odometer</div>
          <div className="text-black self-stretch">{data.odometer}</div>
        </div>
        <div className="bg-black bg-opacity-10 min-h-[1px] w-full mt-6 max-md:max-w-full" />
        <div className="flex w-[497px] max-w-full items-stretch justify-between gap-5 ml-6 mt-7 self-start max-md:flex-wrap">
          <div className="text-black font-semibold">Condition</div>
          <div className="text-black">{data.condition}</div>
        </div>
        <div className="bg-black bg-opacity-10 min-h-[1px] w-full mt-7 max-md:max-w-full" />
        <div className="flex w-[437px] max-w-full items-stretch justify-between gap-5 ml-6 mt-7 self-start max-md:flex-wrap">
          <div className="text-black font-semibold">Primary Damage</div>
          <div className="text-black">{data.primary_damage}</div>
        </div>
        <div className="bg-black bg-opacity-10 min-h-[1px] w-full mt-6 max-md:max-w-full" />
        <div className="flex w-[423px] max-w-full items-stretch justify-between gap-5 ml-6 mt-7 self-start max-md:flex-wrap">
          <div className="text-black font-semibold">Secondary Damage</div>
          <div className="text-black self-start">{data.secondary_damage}</div>
        </div>
        <div className="bg-black bg-opacity-10 min-h-[1px] w-full mt-6 max-md:max-w-full" />
        <div className="flex w-[395px] max-w-full items-stretch justify-between gap-5 ml-6 mt-7 self-start max-md:ml-2.5">
          <div className="text-black font-semibold">Exterior Color</div>
          <div className="text-black self-start">{data.exterior_color}</div>
        </div>
        <div className="bg-black bg-opacity-10 min-h-[1px] w-full mt-7 max-md:max-w-full" />
        <div className="flex w-[388px] max-w-full items-stretch justify-between gap-5 ml-6 mt-7 self-start max-md:ml-2.5 mb-7">
          <div className="text-black font-semibold">Repair Cost</div>
          <div className="text-black self-start">{data.repair_cost}</div>
        </div>
      </div>
    </div>
  );
};

export default VehicleInformation;
