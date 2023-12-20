import React from "react";
import clipboard from "@/public/clipboard-black.svg";
import Image from "next/image";
import { VehicleAccidentType, VehicleMileageType } from "@/app/types";

interface Props {
  data: VehicleAccidentType[];
}
const VehicleAccidentRecord = ({ data }: Props) => {
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
            Accident Records
          </div>
        </div>
        <div className="bg-teal-100 rounded-md p-1 flex flex-col justify-center text-center">
          {data.length} record(s) found
        </div>
      </div>
      <div className="space-y-2 md:space-y-0 md:grid grid-cols-3 gap-4 mt-5">
        {data.map(({ id, reported, located }) => (
          <div
            className="border border-black rounded-md shadow-md p-5"
            key={id}
          >
            <div className="rounded-full h-8 w-8 border-none bg-green-250 flex flex-col justify-center items-center mb-2">
              <Image
                src={clipboard}
                alt="clipboard-text"
                className="h-5 w-5"
                sizes="100vw"
              />
            </div>
            <p className="font-semibold">Accident</p>
            <p className="text-sm font-light mt-2">
              Reported on{" "}
              <span className="text-sm text-red-600 font-normal">
                {reported}
              </span>
            </p>
            {located ? (
              <p className="text-sm font-light mt-2">
                Located at{" "}
                <span className="text-sm text-red-600 font-normal">
                  {located}
                </span>
              </p>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
};

export default VehicleAccidentRecord;
