import React from "react";
import clipboard from "@/public/clipboard-black.svg";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Image from "next/image";
import { VehicleHistoryType } from "@/app/types";

interface Props {
  data: VehicleHistoryType[];
}
const VehicleHistory = ({ data }: Props) => {
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
            Detailed Vehicle History
          </div>
        </div>
        <div className="bg-teal-100 rounded-md p-1 flex flex-col justify-center text-center">
          {data.length} record(s) found
        </div>
      </div>
      <p className="ml-3 text-sm mt-2">
        This section gives you a comprehensive and detailed information recorded
        in this VIN.
      </p>
      <div className="mt-5 overflow-auto">
        <Table className="border border-black">
          <TableHeader className="bg-teal-100 border-b border-black">
            <TableRow className="text-black text-sm">
              <TableHead className="text-black text-sm">Date</TableHead>
              <TableHead className="text-black text-sm">Source</TableHead>
              <TableHead className="text-black text-sm">Location</TableHead>
              <TableHead className="text-black text-sm">Odometer</TableHead>
              <TableHead className="text-black text-sm">Details</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map(({ date, source, location, odometer, details }) => (
              <TableRow key={date}>
                <TableCell>{date}</TableCell>
                <TableCell>{source}</TableCell>
                <TableCell>{location}</TableCell>
                <TableCell>{odometer}</TableCell>
                <TableCell>{details}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default VehicleHistory;
