import React from "react";
import { VehicleInformationType } from "@/app/types";

interface Props {
  data: VehicleInformationType[];
}
const VehicleInformation = ({ data }: Props) => {
  return (
    <div className="w-full mt-10">
      <p className="text-xl font-semibold p-2">Vehicle Information</p>
      <div className="border border-black rounded-md overflow-auto mt-5">
        {data.map(({ title, value }) => (
          <div
            className="grid grid-cols-2 border-b-2 w-full border-stone-100 overflow-auto"
            key={title}
          >
            <div className="p-5">
              <p className="text-black font-semibold">{title}</p>
            </div>
            <div>
              <div className="text-black p-5">{value}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VehicleInformation;
