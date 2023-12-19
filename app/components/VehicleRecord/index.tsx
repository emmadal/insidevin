import React from "react";
import clipboard from "@/public/clipboard-black.svg";
import Image from "next/image";
import { VehicleRecordType } from "@/app/types";

const VehicleRecord = ({ data }: { data: VehicleRecordType }) => {
  return (
    <div className="w-full">
      <div className="grid grid-cols-4 md:gap-8 mt-20 md:space-x-3">
        <div className="col-span-3">
          <div className="flex flex-wrap text-xl flex-row items-center font-semibold p-2">
            <Image
              src={clipboard}
              alt="clipboard-text"
              className="mr-2 h-6 w-6"
              sizes="100vw"
            />
            Vehicle Summary
          </div>
        </div>
        <div className="bg-teal-100 rounded-md p-1 flex flex-col justify-center text-center">
          4 record(s) found
        </div>
      </div>
      <p className="ml-3 text-sm mt-2">
        This section shows a summary of all major events and significant records
        of this vehicle.
      </p>
      <div className="space-y-2 md:space-y-0 md:grid grid-cols-3 gap-4 mt-5">
        <div className="bg-red-300 border border-black rounded-md shadow-md p-5 text-center">
          <div className="rounded-full h-8 w-8 border-none bg-green-250 flex flex-col justify-center items-center mx-auto mb-2">
            <Image
              src={clipboard}
              alt="clipboard-text"
              className="h-5 w-5"
              sizes="100vw"
            />
          </div>
          <p className="font-semibold">Title Brand</p>
          <p className="text-sm font-light mt-2">{data.title_brand}</p>
        </div>
        <div className="border border-black rounded-md shadow-md p-5 text-center">
          <div className="rounded-full h-8 w-8 border-none bg-green-250 flex flex-col justify-center items-center mx-auto mb-2">
            <Image
              src={clipboard}
              alt="clipboard-text"
              className="h-5 w-5"
              sizes="100vw"
            />
          </div>
          <p className="font-semibold">Odometer</p>
          <p className="text-sm font-light mt-2">{data.odometer}</p>
        </div>
        <div className="bg-red-300 border border-black rounded-md shadow-md p-5 text-center">
          <div className="rounded-full h-8 w-8 border-none bg-green-250 flex flex-col justify-center items-center mx-auto mb-2">
            <Image
              src={clipboard}
              alt="clipboard-text"
              className="h-5 w-5"
              sizes="100vw"
            />
          </div>
          <p className="font-semibold">Accident</p>
          <p className="text-sm font-light mt-2">{data.accident}</p>
        </div>
        <div className="bg-red-300 border border-black rounded-md shadow-md p-5 text-center">
          <div className="rounded-full h-8 w-8 border-none bg-green-250 flex flex-col justify-center items-center mx-auto mb-2">
            <Image
              src={clipboard}
              alt="clipboard-text"
              className="h-5 w-5"
              sizes="100vw"
            />
          </div>
          <p className="font-semibold">Damage</p>
          <p className="text-sm font-light mt-2">{data.damage}</p>
        </div>
        <div className="bg-red-300 border border-black rounded-md shadow-md p-5 text-center">
          <div className="rounded-full h-8 w-8 border-none bg-green-250 flex flex-col justify-center items-center mx-auto mb-2">
            <Image
              src={clipboard}
              alt="clipboard-text"
              className="h-5 w-5"
              sizes="100vw"
            />
          </div>
          <p className="font-semibold">Event</p>
          <p className="text-sm font-light mt-2">{data.event}</p>
        </div>
        <div className="border border-black rounded-md shadow-md p-5 text-center">
          <div className="rounded-full h-8 w-8 border-none bg-green-250 flex flex-col justify-center items-center mx-auto mb-2">
            <Image
              src={clipboard}
              alt="clipboard-text"
              className="h-5 w-5"
              sizes="100vw"
            />
          </div>
          <p className="font-semibold">Service & Repair</p>
          <p className="text-sm font-light mt-2">{data.service_repair}</p>
        </div>
        <div className="border border-black rounded-md shadow-md p-5 text-center">
          <div className="rounded-full h-8 w-8 border-none bg-green-250 flex flex-col justify-center items-center mx-auto mb-2">
            <Image
              src={clipboard}
              alt="clipboard-text"
              className="h-5 w-5"
              sizes="100vw"
            />
          </div>
          <p className="font-semibold">Auction</p>
          <p className="text-sm font-light mt-2">{data.auction}</p>
        </div>
        <div className="border border-black rounded-md shadow-md p-5 text-center">
          <div className="rounded-full h-8 w-8 border-none bg-green-250 flex flex-col justify-center items-center mx-auto mb-2">
            <Image
              src={clipboard}
              alt="clipboard-text"
              className="h-5 w-5"
              sizes="100vw"
            />
          </div>
          <p className="font-semibold">Lien/Loan</p>
          <p className="text-sm font-light mt-2">{data.lien_loan}</p>
        </div>
        <div className="border border-black rounded-md shadow-md p-5 text-center">
          <div className="rounded-full h-8 w-8 border-none bg-green-250 flex flex-col justify-center items-center mx-auto mb-2">
            <Image
              src={clipboard}
              alt="clipboard-text"
              className="h-5 w-5"
              sizes="100vw"
            />
          </div>
          <p className="font-semibold">Theft</p>
          <p className="text-sm font-light mt-2">{data.theft}</p>
        </div>
        <div className="border border-black rounded-md shadow-md p-5 text-center">
          <div className="rounded-full h-8 w-8 border-none bg-green-250 flex flex-col justify-center items-center mx-auto mb-2">
            <Image
              src={clipboard}
              alt="clipboard-text"
              className="h-5 w-5"
              sizes="100vw"
            />
          </div>
          <p className="font-semibold">Recall</p>
          <p className="text-sm font-light mt-2">{data.recall}</p>
        </div>
      </div>
    </div>
  );
};

export default VehicleRecord;
