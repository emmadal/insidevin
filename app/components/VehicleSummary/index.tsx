import React from "react";
import clipboard from "@/public/clipboard-black.svg";
import Whiteclipboard from "@/public/clipboard.svg";
import Image from "next/image";
import { summary } from "@/app/constants/vehicle";
import DownloadReport from "../DownloadReport";
import facebook from "@/public/facebook_solid.svg";
import twitter from "@/public/twitter_solid.svg";
import whatsapp from "@/public/whatsapp_solid.svg";

const VehicleSummary = () => {
  return (
    <div className="sticky top-16">
      <div className="bg-black text-white rounded-sm py-1.5">
        <div className="flex flex-wrap flex-row items-center text-sm font-light p-2">
          <Image
            src={Whiteclipboard}
            alt="clipboard-text"
            className="mr-2 h-5 w-5"
            sizes="100vw"
          />
          Vehicle Summary
        </div>
      </div>
      <div className="bg-teal-100 h-auto rounded-sm flex flex-row flex-wrap md:block">
        {summary.map((item) => (
          <div key={item.id}>
            <div className="flex flex-wrap flex-row items-center text-sm font-light p-2.5">
              <Image
                src={clipboard}
                alt="clipboard-text"
                className="mr-2 h-5 w-5"
                sizes="100vw"
              />
              {item.name}
            </div>
            {item?.last ? null : (
              <hr className="hidden md:block w-full bg-black opacity-25" />
            )}
          </div>
        ))}
      </div>
      <div className="flex flex-row flex-wrap items-center justify-between mt-10">
        <div className="inline-flex items-center space-x-3">
          <Image src={whatsapp} alt="whatsapp icon" sizes="100vw" />
          <Image src={twitter} alt="twitter icon" sizes="100vw" />
          <Image src={facebook} alt="facebook icon" sizes="100vw" />
        </div>
        <DownloadReport />
      </div>
    </div>
  );
};

export default VehicleSummary;
