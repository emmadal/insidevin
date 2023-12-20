import React from "react";
import clipboard from "@/public/clipboard-black.svg";
import Image from "next/image";
import { VehicleTitleBrandType } from "@/app/types";

const VehicleBrandCheck = ({ data }: { data: VehicleTitleBrandType }) => {
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
            Title Brand Check
          </div>
        </div>
        <div className="bg-teal-100 rounded-md p-1 flex flex-col justify-center text-center">
          1 record(s) found
        </div>
      </div>
      <div className="space-y-2 md:space-y-0 md:grid grid-cols-3 gap-4 mt-5">
        <div className="border border-black rounded-md shadow-md p-5">
          <div className="rounded-full h-8 w-8 border-none bg-green-250 flex flex-col justify-center items-center mb-2">
            <Image
              src={clipboard}
              alt="clipboard-text"
              className="h-5 w-5"
              sizes="100vw"
            />
          </div>
          <p className="font-semibold">Fire Brand</p>
          <p className="text-sm font-light mt-2">{data.fire_brand}</p>
        </div>
        <div className="border border-black rounded-md shadow-md p-5">
          <div className="rounded-full h-8 w-8 border-none bg-green-250 flex flex-col justify-center items-center mb-2">
            <Image
              src={clipboard}
              alt="clipboard-text"
              className="h-5 w-5"
              sizes="100vw"
            />
          </div>
          <p className="font-semibold">Hail brand</p>
          <p className="text-sm font-light mt-2">{data.hail_brand}</p>
        </div>
        <div className="border border-black rounded-md shadow-md p-5">
          <div className="rounded-full h-8 w-8 border-none bg-green-250 flex flex-col justify-center items-center mb-2">
            <Image
              src={clipboard}
              alt="clipboard-text"
              className="h-5 w-5"
              sizes="100vw"
            />
          </div>
          <p className="font-semibold">Flood brand</p>
          <p className="text-sm font-light mt-2">{data.flood_brand}</p>
        </div>
        <div className="border border-black rounded-md shadow-md p-5">
          <div className="rounded-full h-8 w-8 border-none bg-green-250 flex flex-col justify-center items-center mb-2">
            <Image
              src={clipboard}
              alt="clipboard-text"
              className="h-5 w-5"
              sizes="100vw"
            />
          </div>
          <p className="font-semibold">Junk or scrapped brand</p>
          <p className="text-sm font-light mt-2">{data.junk_brand}</p>
        </div>
        <div className="border border-black rounded-md shadow-md p-5">
          <div className="rounded-full h-8 w-8 border-none bg-green-250 flex flex-col justify-center items-center mb-2">
            <Image
              src={clipboard}
              alt="clipboard-text"
              className="h-5 w-5"
              sizes="100vw"
            />
          </div>
          <p className="font-semibold">Manufacturer buyback</p>
          <p className="text-sm font-light mt-2">{data.manufacturer}</p>
        </div>
        <div className="border border-black rounded-md shadow-md p-5">
          <div className="rounded-full h-8 w-8 border-none bg-green-250 flex flex-col justify-center items-center mb-2">
            <Image
              src={clipboard}
              alt="clipboard-text"
              className="h-5 w-5"
              sizes="100vw"
            />
          </div>
          <p className="font-semibold">Lemon brand</p>
          <p className="text-sm font-light mt-2">{data.lemon_brand}</p>
        </div>
        <div className="bg-red-300 border border-black rounded-md shadow-md p-5">
          <div className="rounded-full h-8 w-8 border-none bg-green-250 flex flex-col justify-center items-center mb-2">
            <Image
              src={clipboard}
              alt="clipboard-text"
              className="h-5 w-5"
              sizes="100vw"
            />
          </div>
          <p className="font-semibold">Salvage brand</p>
          <p className="text-sm font-light mt-2">{data.salvage_brand}</p>
        </div>
        <div className="border border-black rounded-md shadow-md p-5">
          <div className="rounded-full h-8 w-8 border-none bg-green-250 flex flex-col justify-center items-center mb-2">
            <Image
              src={clipboard}
              alt="clipboard-text"
              className="h-5 w-5"
              sizes="100vw"
            />
          </div>
          <p className="font-semibold">Rebuilt or rebuildable brand</p>
          <p className="text-sm font-light mt-2">{data.rebuilt_brand}</p>
        </div>
        <div className="border border-black rounded-md shadow-md p-5">
          <div className="rounded-full h-8 w-8 border-none bg-green-250 flex flex-col justify-center items-center mb-2">
            <Image
              src={clipboard}
              alt="clipboard-text"
              className="h-5 w-5"
              sizes="100vw"
            />
          </div>
          <p className="font-semibold">Odometer Brand</p>
          <p className="text-sm font-light mt-2">{data.odemeter_brand}</p>
        </div>
        <div className="border border-black rounded-md shadow-md p-5">
          <div className="rounded-full h-8 w-8 border-none bg-green-250 flex flex-col justify-center items-center mb-2">
            <Image
              src={clipboard}
              alt="clipboard-text"
              className="h-5 w-5"
              sizes="100vw"
            />
          </div>
          <p className="font-semibold">Auction brand</p>
          <p className="text-sm font-light mt-2">{data.auction_brand}</p>
        </div>
      </div>
    </div>
  );
};

export default VehicleBrandCheck;
