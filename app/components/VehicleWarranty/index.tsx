import React from "react";
import clipboard from "@/public/clipboard-black.svg";
import Image from "next/image";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { VehicleWarrantyType } from "@/app/types";

interface Props {
  data: VehicleWarrantyType[];
}
const VehicleWarranty = ({ data }: Props) => {
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
            Warranty Status/Coverage
          </div>
        </div>
        <div className="bg-teal-100 rounded-md p-1 flex flex-col justify-center text-center">
          {data.length} record(s) found
        </div>
      </div>
      <p className="ml-3 text-sm mt-2">
        This vehicle is covered. If this vehicle has changed hands, the new
        owner is also covered by this warranty. Below is your default warranty
        information. This excludes any additional warranty coverage you may have
        purchased.
      </p>
      <div className="mt-5 overflow-auto">
        <Table className="border border-black">
          <TableHeader className="bg-teal-100 border-b border-black">
            <TableRow className="text-black text-sm">
              <TableHead className="text-black text-sm">Warranty</TableHead>
              <TableHead className="text-black text-sm">Months/Miles</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map(({ id, warranty, months }) => (
              <TableRow key={id}>
                <TableCell>{warranty}</TableCell>
                <TableCell>{months}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default VehicleWarranty;
