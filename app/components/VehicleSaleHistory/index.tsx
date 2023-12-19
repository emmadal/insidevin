import React from "react";
import clipboard from "@/public/clipboard-black.svg";
import Image from "next/image";
import carCrashed from "@/public/car_crashed.svg";

const VehicleSaleHistory = () => {
  return (
    <div>
      <div className="grid grid-cols-4 md:gap-8 mt-20 md:space-x-3">
        <div className="col-span-3">
          <div className="flex flex-wrap text-xl flex-row items-center font-semibold p-2">
            <Image
              src={clipboard}
              alt="clipboard-text"
              className="mr-2 h-6 w-6"
              sizes="100vw"
            />
            Sales Listing History
          </div>
        </div>
        <div className="bg-teal-100 rounded-md p-1 flex flex-col justify-center text-center">
          1 record(s) found
        </div>
      </div>
      <p className="ml-3 text-sm mt-2">
        This section summarizes the ownership history of this vehicle
      </p>
      <div className="border border-black overflow-auto mt-5">
        <Image
          src={carCrashed}
          alt="car crashed"
          loading="lazy"
          sizes="100vw"
          className="object-cover w-full m-0 p-0"
        />
        <div className="grid grid-cols-3 gap-2 mt-1 p-1">
          <div>
            <Image
              src={carCrashed}
              alt="car crashed"
              loading="lazy"
              sizes="100vw"
              className="object-cover w-full m-0 p-0"
            />
          </div>
          <div>
            <Image
              src={carCrashed}
              alt="car crashed"
              loading="lazy"
              sizes="100vw"
              className="object-cover w-full m-0 p-0"
            />
          </div>
          <div>
            <Image
              src={carCrashed}
              alt="car crashed"
              loading="lazy"
              sizes="100vw"
              className="object-cover w-full m-0 p-0"
            />
          </div>
        </div>
      </div>
      <div className="bg-teal-100 w-full flex flex-col items-center justify-center rounded-md py-4 mt-5">
        <p className="text-black font-semibold">Status</p>
        <p className="font-light text-black">Sold on Approval!</p>
      </div>
      <div className="grid grid-cols-3 gap-8 mt-3 p-1">
        <div className="border border-black p-5 rounded-md">
          <p className="text-black font-semibold">Date</p>
          <p className="font-light text-black">08/24/2018</p>
        </div>
        <div className="border border-black p-5 rounded-md">
          <p className="text-black font-semibold">Price</p>
          <p className="font-light text-black">3,400</p>
        </div>
        <div className="border border-black p-5 rounded-md">
          <p className="text-black font-semibold">Retail Value</p>
          <p className="font-light text-black">10686</p>
        </div>
      </div>
    </div>
  );
};

export default VehicleSaleHistory;
