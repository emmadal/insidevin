import React from "react";
import { VehicleReportType } from "@/app/types";

const VehicleReport = ({
  data,
  car_model,
  vin,
}: {
  data: VehicleReportType;
  car_model: string;
  vin: string;
}) => {
  return (
    <div className="border border-black rounded-md bg-stone-50">
      <div className="bg-black text-white py-5 w-full">
        <div className="ml-5">
          <p className="font-semibold text-3xl">{car_model}</p>
          <p className="font-light mt-2 text-xl">VIN: {vin}</p>
        </div>
      </div>
      <div className="space-y-2 md:space-y-0 md:grid grid-cols-3 gap-2 p-5">
        <div className="bg-white rounded-md shadow-md p-5">
          <p className="font-semibold">Trim</p>
          <p>{data.trim}</p>
        </div>
        <div className="bg-white rounded-md shadow-md p-5">
          <p className="font-semibold">Engine</p>
          <p>{data.engine}</p>
        </div>
        <div className="bg-white rounded-md shadow-md p-5">
          <p className="font-semibold">Fuel Type</p>
          <p>{data.fuel_type}</p>
        </div>
        <div className="bg-white rounded-md shadow-md p-5">
          <p className="font-semibold">Transmission</p>
          <p>{data.transmission}</p>
        </div>
        <div className="bg-white rounded-md shadow-md p-5">
          <p className="font-semibold">Drive Type</p>
          <p>{data.drive_type}</p>
        </div>
        <div className="bg-white rounded-md shadow-md p-5">
          <p className="font-semibold">Doors</p>
          <p>{data.doors}</p>
        </div>
        <div className="bg-white rounded-md shadow-md p-5">
          <p className="font-semibold">Curb Weight</p>
          <p>{data.curb_weight}</p>
        </div>
        <div className="bg-white rounded-md shadow-md p-5">
          <p className="font-semibold">MSRP</p>
          <p>{data.msrp}</p>
        </div>
        <div className="bg-white rounded-md shadow-md p-5">
          <p className="font-semibold">Body Type</p>
          <p>{data.body_type}</p>
        </div>
        <div className="bg-white rounded-md shadow-md p-5">
          <p className="font-semibold">Vehicle Type</p>
          <p>{data.vehicle_type}</p>
        </div>
        <div className="bg-white rounded-md shadow-md p-5">
          <p className="font-semibold">Vehicle Size</p>
          <p>{data.vehicle_size}</p>
        </div>
        <div className="bg-white rounded-md shadow-md p-5">
          <p className="font-semibold">Country</p>
          <p>{data.country}</p>
        </div>
        <div className="bg-white rounded-md shadow-md p-5">
          <p className="font-semibold">Standard Seating</p>
          <p>{data.standard_seating}</p>
        </div>
      </div>
    </div>
  );
};

export default VehicleReport;
