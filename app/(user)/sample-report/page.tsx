import React from "react";
import DateReport from "@/app/components/DateReport";
import { vehicle } from "@/app/constants/vehicle_report";
import {
  vehicle_brand_check,
  vehicle_record,
} from "@/app/constants/vehicle_record";
import VehicleSummary from "@/app/components/VehicleSummary";
import VehicleReport from "@/app/components/VehicleReport";
import VehicleRecord from "@/app/components/VehicleRecord";
import VehicleUsage from "@/app/components/VehicleUsage";
import VehicleOwnership from "@/app/components/VehicleOwnership";
import VehicleSaleHistory from "@/app/components/VehicleSaleHistory";
import VehicleInformation from "@/app/components/VehicleInformation";
import { vehicle_mileage, vehicle_ownership } from "@/app/constants/vehicle_ownership";
import {
  vehicle_condition,
  vehicle_information,
} from "@/app/constants/vehicle_information";
import VehicleCondition from "@/app/components/VehicleCondition";
import VehicleBrandCheck from "@/app/components/VehicleBrandCheck";
import VehicleEvent from "@/app/components/VehicleEvent";
import VehicleMileage from "@/app/components/VehicleMileage";
import VehicleAccidentRecord from "@/app/components/VehicleAccidentRecord";
import { vehicle_accident } from "@/app/constants/vehicle_accident";

const SampleReport = () => {
  return (
    <div>
      <div className="md:grid md:grid-cols-2 md:gap-3 mt-20 md:space-x-3">
        <div className="">
          <p className="font-bold text-xl">Vehicle History Report</p>
        </div>
        <div>
          <DateReport />
        </div>
      </div>
      <hr className="w-full mt-5" />

      <div className="md:grid md:grid-cols-4 md:gap-3 mt-5 md:space-x-3 space-y-5 md:space-y-0">
        <div className="col-span-3">
          <VehicleReport
            data={vehicle}
            car_model="2015 Toyota Corolla"
            vin="2T1BURHE0FC320645"
          />
          <VehicleRecord data={vehicle_record} />
          <VehicleUsage />
          <VehicleOwnership data={vehicle_ownership} />
          <VehicleSaleHistory />
          <VehicleInformation data={vehicle_information} />
          <VehicleCondition data={vehicle_condition} />
          <VehicleBrandCheck data={vehicle_brand_check} />
          <VehicleEvent data={vehicle_brand_check} />
          <VehicleMileage data={vehicle_mileage} />
          <VehicleAccidentRecord data={vehicle_accident} />
        </div>
        <div>
          <VehicleSummary />
        </div>
      </div>
    </div>
  );
};

export default SampleReport;
