import React from "react";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";
import Image from "next/image";

interface IPropsCar {
  vin?: string;
  brand?: string;
  trim?: string;
  engine?: string;
  style?: string;
  msrp?: string;
}
const CardReportResume = async (props: IPropsCar) => {
  return (
    <Card className="w-[320px] overflow-auto">
      <CardHeader>
        <CardTitle>{props.brand}</CardTitle>
        <CardDescription>VIN #{props.vin}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-row items-center flex-wrap my-3 space-x-3">
          <Image src="/trim.svg" alt="trim" height={25} width={25} />
          <span className="text-gray-500 inline-flex items-center">
            Trim: <p className="font-semibold text-sm ml-3">{props.trim}</p>
          </span>
        </div>
        <hr />
        <div className="flex flex-row items-center flex-wrap my-3 space-x-3">
          <Image src="/engine.svg" alt="engine" height={25} width={25} />
          <span className="text-gray-500 inline-flex items-center">
            Engine:{" "}
            <p className="font-semibold text-sm text-black ml-3">
              {props.engine}
            </p>
          </span>
        </div>
        <hr />
        <div className="flex flex-row items-center flex-wrap my-3 space-x-3">
          <Image src="/style.svg" alt="style" height={25} width={25} />
          <span className="text-gray-500 inline-flex items-center">
            Style:{" "}
            <p className="font-semibold text-black ml-3">{props.style}</p>
          </span>
        </div>
        <hr />
        <div className="flex flex-row items-center flex-wrap my-3 space-x-3">
          <Image src="/msrp.svg" alt="msrp" height={25} width={25} />
          <span className="text-gray-500 inline-flex items-center">
            MRSP: <p className="font-semibold text-black ml-3">{props.msrp}</p>
          </span>
        </div>
      </CardContent>
    </Card>
  );
};

export default CardReportResume;
