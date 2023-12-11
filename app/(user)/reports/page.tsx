import React from "react";
import TextInput from "@/app/components/TextInput";
import Image from "next/image";
import SubmitButton from "@/app/components/FormButton";
import CardReportResume from "@/app/components/CardReportResume";

const ReportsPage = () => {
  return (
    <div>
      <div>
        <p className="text-lg font-bold">
          Purchase Full History Report for VIN: 56UK78GG778JIO0SGS
        </p>
      </div>
      <div className="md:mt-14 mt-6">
        <div className="md:grid grid-cols-2 gap-8">
          <div className="mt-10">
            <Image
              src="/car.webp"
              alt="car image"
              priority
              sizes="100vw"
              height={500}
              width={500}
            />
          </div>
          <div className="w-[350px] mx-auto border-gray-300 border-solid border p-5 my-8">
            <p className="text-base font-semibold">Purchase Report</p>
            <div className="flex flex-row flex-wrap items-center justify-between border-green-250 rounded-md border-2 border-solid p-2.5 my-7">
              <p>1 Report</p>
              <p className="text-green-250 font-semibold">$15.99</p>
            </div>
            <form action="">
              <TextInput name="email" label="Email" type="email" />
              <div className="flex flex-row items-center space-x-2">
                <TextInput
                  type="checkbox"
                  name="check"
                  className="checked:accent-green-250 h-4 w-4 rounded-full"
                />
                <span className="font-normal text-base">
                  Sign up for the newsletter
                </span>
              </div>
              <SubmitButton label="Order Report Now" />
            </form>
          </div>
        </div>

        <div>
          <CardReportResume />
        </div>
      </div>
    </div>
  );
};

export default ReportsPage;
