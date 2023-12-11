import React from "react";
import Image from "next/image";
import CardReportResume from "@/app/components/CardReportResume";
import CardReportFull from "@/app/components/CardReportFull";
import SubmitButton from "@/app/components/FormButton";
import TextInput from "@/app/components/TextInput";
import { reportForm } from "@/app/action";

const ReportsPage = () => {
  return (
    <div>
      <div>
        <p className="text-lg font-bold">
          Purchase Full History Report for VIN: 56UK78GG778JIO0SGS
        </p>
      </div>
      <div className="md:mt-14 mt-6">
        <div className="md:grid grid-cols-2 gap-8 items-center mb-10">
          <div>
            <Image
              src="/car.webp"
              alt="car image"
              priority
              sizes="100vw"
              height={500}
              width={500}
            />
          </div>
          <div className="w-[300px] border-gray-300 border-solid border p-5 mx-auto md:mx-0 md:place-self-end rounded-md">
            <p className="text-base font-semibold">Purchase Report</p>
            <div className="flex flex-row flex-wrap items-center justify-between border-green-250 rounded-md border-2 border-solid p-2.5 my-7 bg-green-100">
              <p>1 Report</p>
              <p className="text-green-250 font-semibold">$15.99</p>
            </div>
            <form action={reportForm}>
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

        <div className="md:grid grid-cols-3 gap-5 space-y-10 md:space-y-0">
          <div>
            <CardReportResume />
          </div>
          <div className="col-span-2">
            <CardReportFull />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportsPage;
