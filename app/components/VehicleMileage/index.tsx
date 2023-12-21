import React from "react";
import clipboard from "@/public/clipboard-black.svg";
import chart from "@/public/charts.png";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Image from "next/image";
import { VehicleMileageType } from "@/app/types";

interface Props {
  data: VehicleMileageType[];
}
const VehicleMileage = ({ data }: Props) => {
  return (
    <div className="w-full mt-10">
      <div className="grid grid-cols-4 md:gap-8">
        <div className="col-span-3">
          <div className="flex flex-wrap text-xl flex-row items-center font-semibold p-2">
            <Image
              src={clipboard}
              alt="clipboard-text"
              className="mr-2 h-6 w-6"
              sizes="100vw"
            />
            Mileage Records
          </div>
        </div>
        <div className="bg-teal-100 rounded-md p-1 flex flex-col justify-center text-center">
          {data.length} record(s) found
        </div>
      </div>
      <p className="ml-3 text-sm mt-2">
        Last known record: {data.at(-1)?.mileage}
      </p>
      <div className="mt-5 overflow-auto">
        <Table className="border border-black">
          <TableHeader className="bg-teal-100 border-b border-black">
            <TableRow className="text-black text-sm">
              <TableHead className="text-black text-sm">
                Date Reported
              </TableHead>
              <TableHead className="text-black text-sm">Mileage</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map(({ id, date, mileage }) => (
              <TableRow key={id}>
                <TableCell>{date}</TableCell>
                <TableCell>{mileage}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <Image
          className=" object-fill"
          src={chart}
          sizes="100vw"
          alt="charts"
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default VehicleMileage;
