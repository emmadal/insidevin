import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import Image from "next/image";
import ownership from "@/public/ownership.svg";
import vinspec from "@/public/vinspec.svg";
import nmvtis from "@/public/nmvtis.svg";
import lemon from "@/public/lemon.svg";
import odometer from "@/public/odometer.svg";
import realcar from "@/public/realcar.svg";
import insurance from "@/public/insurance.svg";
import auctions from "@/public/auctions.svg";
import chart from "@/public/chart.svg";
import theft from "@/public/theft.svg";
import salvage from "@/public/salvage.svg";
import impound from "@/public/impound.svg";

const CardReportFull = () => (
  <Card className="w-full mx-auto">
    <CardHeader>
      <CardTitle className="text-center text-lg">
        What&#39;s in the report?
      </CardTitle>
    </CardHeader>
    <CardContent className="md:grid grid-cols-2 gap-2">
      <div>
        <div className="flex flex-row items-center flex-wrap my-1 space-x-3">
          <Image src={ownership} alt="ownership image" />
          <p className="text-sm text-gray-500">Ownership History</p>
        </div>
        <hr className="w-3/4" />
      </div>
      <div>
        <div className="flex flex-row items-center flex-wrap my-1 space-x-3">
          <Image src={vinspec} alt="vinspec" />
          <p className="text-sm text-gray-500">VIN Spec & Key Features</p>
        </div>
        <hr className="w-3/4" />
      </div>
      <div>
        <div className="flex flex-row items-center flex-wrap my-1 space-x-3">
          <Image src={nmvtis} alt="nmvtis" />
          <p className="text-sm text-gray-500">NMVTIS Title Brands History</p>
        </div>
        <hr className="w-3/4" />
      </div>
      <div>
        <div className="flex flex-row items-center flex-wrap my-1 space-x-3">
          <Image src={lemon} alt="lemon" />
          <p className="text-sm text-gray-500">Lemon Law Buyback Title</p>
        </div>
        <hr className="w-3/4" />
      </div>
      <div>
        <div className="flex flex-row items-center flex-wrap my-1 space-x-3">
          <Image src={odometer} alt="odometer" />
          <p className="text-sm text-gray-500">Odometer Rollback Alert</p>
        </div>
        <hr className="w-3/4" />
      </div>
      <div>
        <div className="flex flex-row items-center flex-wrap my-1 space-x-3">
          <Image src={realcar} alt="realcar" />
          <p className="text-sm text-gray-500">Real Car Photos</p>
        </div>
        <hr />
      </div>
      <div>
        <div className="flex flex-row items-center flex-wrap my-1 space-x-3">
          <Image src={insurance} alt="insurance" />
          <p className="text-sm text-gray-500">Insurance Total Loss</p>
        </div>
        <hr className="w-3/4" />
      </div>
      <div>
        <div className="flex flex-row items-center flex-wrap my-1 space-x-3">
          <Image src={auctions} alt="auctions" />
          <p className="text-sm text-gray-500">Auction Sales History</p>
        </div>
        <hr className="w-3/4" />
      </div>
      <div>
        <div className="flex flex-row items-center flex-wrap my-1 space-x-3">
          <Image src={impound} alt="impound" />
          <p className="text-sm text-gray-500">Line & Impound Information</p>
        </div>
        <hr className="w-3/4" />
      </div>
      <div>
        <div className="flex flex-row items-center flex-wrap my-1 space-x-3">
          <Image src={theft} alt="theft" />
          <p className="text-sm text-gray-500">Theft Records</p>
        </div>
        <hr className="w-3/4" />
      </div>
      <div>
        <div className="flex flex-row items-center flex-wrap my-1 space-x-3">
          <Image src={salvage} alt="salvage" />
          <p className="text-sm text-gray-500">Junk/Salvage/Rebuilt Title</p>
        </div>
      </div>
      <div>
        <div className="flex flex-row items-center flex-wrap my-1 space-x-3">
          <Image src={chart} alt="chart" />
          <p className="text-sm text-gray-500">40+ data points</p>
        </div>
      </div>
    </CardContent>
  </Card>
);

export default CardReportFull;
