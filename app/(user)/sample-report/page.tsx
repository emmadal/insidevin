import React, { Suspense } from "react";
import DateReport from "@/app/components/DateReport";
import VehicleSummary from "@/app/components/VehicleSummary";
import VehicleReport from "@/app/components/VehicleReport";
import VehicleRecord from "@/app/components/VehicleRecord";
import VehicleUsage from "@/app/components/VehicleUsage";
import VehicleOwnership from "@/app/components/VehicleOwnership";
import VehicleSaleHistory from "@/app/components/VehicleSaleHistory";
import VehicleInformation from "@/app/components/VehicleInformation";
import VehicleCondition from "@/app/components/VehicleCondition";
import VehicleBrandCheck from "@/app/components/VehicleBrandCheck";
import VehicleEvent from "@/app/components/VehicleEvent";
import VehicleMileage from "@/app/components/VehicleMileage";
import VehicleAccidentRecord from "@/app/components/VehicleAccidentRecord";
import VehicleDamage from "@/app/components/VehicleDamage";
import VehicleHistory from "@/app/components/VehicleHistory";
import VehicleRepairCost from "@/app/components/VehicleRepairCost";
import VehicleWarranty from "@/app/components/VehicleWarranty";
import Disclaimer from "@/app/components/Disclaimer";

import {
  vehicle_condition,
  vehicle_history,
  vehicle_information,
  vehicle_accident,
  vehicle_damage,
  vehicle_mileage,
  vehicle_brand_check,
  vehicle_record,
  vehicle_ownership,
  vehicle,
  vehicle_repair,
  vehicle_warranty,
  vehicle_event,
  vehicle_usage,
} from "@/app/constants/vehicle";
import ReportLoading from "@/app/components/ReportLoading";

const SampleReport = () => {
  return (
    <Suspense fallback={<ReportLoading />}>
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
          <VehicleUsage data={vehicle_usage} />
          <VehicleOwnership data={vehicle_ownership} />
          <VehicleSaleHistory />
          <VehicleInformation data={vehicle_information} />
          <VehicleCondition data={vehicle_condition} />
          <VehicleBrandCheck data={vehicle_brand_check} />
          <VehicleEvent data={vehicle_event} />
          <VehicleMileage data={vehicle_mileage} />
          <VehicleAccidentRecord data={vehicle_accident} />
          <VehicleDamage data={vehicle_damage} />
          <VehicleHistory data={vehicle_history} />
          <VehicleRepairCost data={vehicle_repair} />
          <VehicleWarranty data={vehicle_warranty} />
          <Disclaimer />
        </div>
        <div>
          <VehicleSummary />
        </div>
      </div>
      <p className="text-center text-black text-sm mt-20 mb-5">
        &#169; {new Date().getFullYear()} Detailed Vehicle History. All Rights
        Reserved.
      </p>
    </Suspense>
  );
};

export default SampleReport;
