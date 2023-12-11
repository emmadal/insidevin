import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import Image from "next/image";

const CardReportFull = () => (
  <Card className="mb-10">
    <CardHeader>
      <CardTitle className="text-center">What&#39;s in the report?</CardTitle>
    </CardHeader>
    <CardContent className="md:grid grid-cols-2 gap-2">
      <div>
        <div className="flex flex-row items-center flex-wrap my-3 space-x-3">
          <Image src="/ownership.svg" alt="ownership" height={25} width={25} />
          <p className="text-base text-gray-500">Ownership History</p>
        </div>
        <hr className="w-3/4" />
      </div>
      <div>
        <div className="flex flex-row items-center flex-wrap my-3 space-x-3">
          <Image src="/vinspec.svg" alt="vinspec" height={25} width={25} />
          <p className="text-base text-gray-500">VIN Spec & Key Features</p>
        </div>
        <hr className="w-3/4" />
      </div>
      <div>
        <div className="flex flex-row items-center flex-wrap my-3 space-x-3">
          <Image src="/nmvtis.svg" alt="nmvtis" height={25} width={25} />
          <p className="text-base text-gray-500">NMVTIS Title Brands History</p>
        </div>
        <hr className="w-3/4" />
      </div>
      <div>
        <div className="flex flex-row items-center flex-wrap my-3 space-x-3">
          <Image src="/lemon.svg" alt="lemon" height={25} width={25} />
          <p className="text-base text-gray-500">Lemon Law Buyback Title</p>
        </div>
        <hr className="w-3/4" />
      </div>
      <div>
        <div className="flex flex-row items-center flex-wrap my-3 space-x-3">
          <Image src="/odometer.svg" alt="odometer" height={25} width={25} />
          <p className="text-base text-gray-500">Odometer Rollback Alert</p>
        </div>
        <hr className="w-3/4" />
      </div>
      <div>
        <div className="flex flex-row items-center flex-wrap my-3 space-x-3">
          <Image src="/realcar.svg" alt="realcar" height={25} width={25} />
          <p className="text-base text-gray-500">Real Car Photos</p>
        </div>
        <hr />
      </div>
      <div>
        <div className="flex flex-row items-center flex-wrap my-3 space-x-3">
          <Image src="/insurance.svg" alt="insurance" height={25} width={25} />
          <p className="text-base text-gray-500">Insurance Total Loss</p>
        </div>
        <hr className="w-3/4" />
      </div>
      <div>
        <div className="flex flex-row items-center flex-wrap my-3 space-x-3">
          <Image src="/auctions.svg" alt="auctions" height={25} width={25} />
          <p className="text-base text-gray-500">Auction Sales History</p>
        </div>
        <hr className="w-3/4" />
      </div>
      <div>
        <div className="flex flex-row items-center flex-wrap my-3 space-x-3">
          <Image src="/impound.svg" alt="impound" height={25} width={25} />
          <p className="text-base text-gray-500">Line & Impound Information</p>
        </div>
        <hr className="w-3/4" />
      </div>
      <div>
        <div className="flex flex-row items-center flex-wrap my-3 space-x-3">
          <Image src="/theft.svg" alt="theft" height={25} width={25} />
          <p className="text-base text-gray-500">Theft Records</p>
        </div>
        <hr className="w-3/4" />
      </div>
      <div>
        <div className="flex flex-row items-center flex-wrap my-3 space-x-3">
          <Image src="/salvage.svg" alt="salvage" height={25} width={25} />
          <p className="text-base text-gray-500">Junk/Salvage/Rebuilt Title</p>
        </div>
      </div>
      <div className=" justify-start">
        <div className="flex flex-row items-center flex-wrap my-3 space-x-3">
          <Image src="/chart.svg" alt="chart" height={25} width={25} />
          <p className="text-base text-gray-500">40+ data points</p>
        </div>
      </div>
    </CardContent>
  </Card>
);

export default CardReportFull;
