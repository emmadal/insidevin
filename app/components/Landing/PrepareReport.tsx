import React from "react";
import Image from "next/image";

const PrepareReport = () => {
  return (
    <div className="md:px-8 mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8 md:mt-8">
      <div className="mb-10">
        <h2 className="font-semibold text-3xl">
          What we check for preparing a report
        </h2>
        <p className="text-gray-400 mt-2">
          InsideVin has access to one of the largest database networks for
          vehicle reports.
        </p>
        <p className="text-gray-400">
          It contains countless data entries from all over world.
        </p>
      </div>
      <div className="md:grid grid-cols-3 gap-10 space-y-10 sm:space-y-0">
        <div>
          <Image
            src="/1._Hidden_damage_Report.svg"
            alt="_Hidden_damage_Report"
            sizes="100vw"
            height={110}
            width={110}
            priority
          />
          <p className="font-semibold text-xl">Hidden damage report</p>
          <p className="text-md font-light mt-3">
            No one wants to buy a car with damage they don&#39;t know about.
            This might result in not only overpaying for the car but also
            spending a lot of money in the future.
          </p>
        </div>
        <div>
          <Image
            src="/2._Mileage_rollback.svg"
            alt="_Mileage_rollback"
            sizes="100vw"
            height={110}
            width={110}
            priority
          />
          <p className="font-semibold text-xl">Mileage rollback</p>
          <p className="text-md font-light mt-3">
            Mileage fraud is more common than you think. You&#39;re not only
            overpaying for the car but also might end up with a hefty bill.
          </p>
        </div>
        <div>
          <Image
            src="/3._Historical_Photos.svg"
            alt="_Historical_Photos"
            sizes="100vw"
            height={110}
            width={110}
            priority
          />
          <p className="font-semibold text-xl">Historical photos</p>
          <p className="text-md font-light mt-3">
            Knowing how the car looked before is very important in understanding
            it&#39;s history, possible damage and other problems.
          </p>
        </div>
      </div>
      <div className="md:grid grid-cols-3 gap-10 space-y-10 sm:space-y-0 mt-5">
        <div>
          <Image
            src="/4._Common_Faults_of_each_model.svg"
            alt="_Common_Faults_of_each_model"
            sizes="100vw"
            height={110}
            width={110}
            priority
          />
          <p className="font-semibold text-xl">Common faults of each model</p>
          <p className="text-md font-light mt-3">
            Not everyone is a car guru. Having a list of common drawbacks helps
            you make a better purchase decision.
          </p>
        </div>
        <div>
          <Image
            src="/5._Multiple_owners.svg"
            alt="_Mileage_rollback"
            sizes="100vw"
            height={110}
            width={110}
            priority
          />
          <p className="font-semibold text-xl">Multiple owners</p>
          <p className="text-md font-light mt-3">
            Knowing how many owners the car had helps you understand if the car
            was sold frequently, which might be an indication of a bad car.
          </p>
        </div>
        <div>
          <Image
            src="/6._Theft_records.svg"
            alt="_Theft_records"
            sizes="100vw"
            height={110}
            width={110}
            priority
          />
          <p className="font-semibold text-xl">Theft records</p>
          <p className="text-md font-light mt-3">
            We check millions of records form Interpol and local police to make
            sure the car is not stolen in any country.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrepareReport;
