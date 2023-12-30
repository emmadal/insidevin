import React, { Suspense } from "react";
import Image from "next/image";
import CardReportResume from "@/app/components/CardReportResume";
import CardReportFull from "@/app/components/CardReportFull";
import carImage from "@/public/car.png";
import NoData from "@/app/components/NoData";
import ReportLoading from "@/app/components/ReportLoading";
import { cookies } from "next/headers";
import dynamic from "next/dynamic";
const PaymentCard = dynamic(() => import("@/app/components/PaymentCard"), {
  ssr: false,
});

interface Props {
  params: { vin: string };
}

const ReportsPage = ({ params: { vin } }: Props) => {
  const sales = cookies().has("sales_history");
  if (!sales) return <NoData vin={vin} />;
  const sales_history: any = cookies().get("sales_history");
  const data = JSON.parse(sales_history?.value);

  return (
    <Suspense fallback={<ReportLoading />}>
      <div>
        <p className="text-lg font-bold">
          Purchase Full History Report for VIN: {data?.vin}
        </p>
      </div>
      <div className="md:mt-14 mt-6">
        <div className="md:grid grid-cols-2 gap-8 items-center mb-10">
          <div>
            <Image
              src={carImage}
              alt="car image"
              sizes="100vw"
              className="w-full h-auto"
            />
          </div>
          <div className="w-[300px] border-gray-300 border-solid border p-5 mx-auto md:mx-0 md:place-self-end rounded-md">
            <p className="text-base font-semibold">Purchase Report</p>
            <div className="flex flex-row flex-wrap items-center justify-between border-green-250 rounded-md border-2 border-solid p-2.5 my-7 bg-green-100">
              <p>1 Report</p>
              <p className="text-green-250 font-semibold">$15.99</p>
            </div>
            <PaymentCard vin={data?.vin} saleHistoryID={data?._id} />
          </div>
        </div>

        <div className="md:grid grid-cols-3 gap-5 space-y-10 md:space-y-0">
          <div>
            <CardReportResume
              vin={data?.vin || "Not found"}
              brand={data?.make || "Not found"}
              style={data?.model || "Not found"}
              engine={data?.sales_history[0]?.data?.engine || "Not found"}
              trim={data?.trim || "Not found"}
              msrp={data?.msrp || "Not found"}
            />
          </div>
          <div className="col-span-2 w-full">
            <CardReportFull />
          </div>
        </div>
      </div>
    </Suspense>
  );
};

export default ReportsPage;
