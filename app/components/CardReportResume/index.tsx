import React from "react";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";
import Image from "next/image";
import trim from "@/public/trim.svg";
import engine from "@/public/engine.svg";
import style from "@/public/style.svg";
import msrp from "@/public/msrp.svg";

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
    <Card className="w-[320px] overflow-auto mx-auto md:mx-0">
      <CardHeader>
        <CardTitle>{props.brand}</CardTitle>
        <CardDescription>VIN #{props.vin}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-row items-center flex-wrap my-3 space-x-3">
          <Image src={trim} alt="trim" />
          <span className="text-gray-500 inline-flex items-center">
            <span className="text-sm">Trim:</span>{" "}
            <p className="font-semibold text-sm ml-3 text-black">
              {props.trim}
            </p>
          </span>
        </div>
        <hr />
        <div className="flex flex-row items-center flex-wrap my-3 space-x-3">
          <Image src={engine} alt="engine" />
          <span className="text-gray-500 inline-flex items-center">
            <span className="text-sm">Engine:</span>{" "}
            <p className="font-semibold text-sm text-black ml-3">
              {props.engine}
            </p>
          </span>
        </div>
        <hr />
        <div className="flex flex-row items-center flex-wrap my-3 space-x-3">
          <Image src={style} alt="style" />
          <span className="text-gray-500 inline-flex items-center">
            <span className="text-sm">Style:</span>{" "}
            <p className="font-semibold text-black ml-3">{props.style}</p>
          </span>
        </div>
        <hr />
        <div className="flex flex-row items-center flex-wrap my-3 space-x-3">
          <Image src={msrp} alt="msrp" />
          <span className="text-gray-500 inline-flex items-center">
            <span className="text-sm">MRSP:</span>{" "}
            <p className="font-semibold text-sm ml-3 text-black">
              {props.msrp}
            </p>
          </span>
        </div>
      </CardContent>
    </Card>
  );
};

export default CardReportResume;
