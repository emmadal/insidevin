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
import { VehicleOwnerShipType } from "@/app/types";

interface Props {
    data: VehicleOwnerShipType[]
}
const VehicleOwnership = ({ data }: Props) => {
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
            Ownership History
          </div>
        </div>
        <div className="bg-teal-100 rounded-md p-1 flex flex-col justify-center text-center">
          {data.length} record(s) found
        </div>
      </div>
      <p className="ml-3 text-sm mt-2">
        This section summarizes the ownership history of this vehicle
      </p>
      <div className="mt-5 overflow-auto">
        <Table className="border border-black">
          <TableHeader className="bg-teal-100 border-b border-black">
            <TableRow className="text-black text-sm">
              <TableHead className="text-black text-sm p-3">
                Purchased On
              </TableHead>
              <TableHead className="text-black text-sm">Located In</TableHead>
              <TableHead className="text-black text-sm">Owned From</TableHead>
              <TableHead className="text-black text-sm">
                Duration of OwnerShip
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map(({ id, located_in, purchased_on, owned_from, duration }) => (
              <TableRow key={id}>
                <TableCell>{purchased_on}</TableCell>
                <TableCell>{located_in}</TableCell>
                <TableCell>{owned_from}</TableCell>
                <TableCell>{duration}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default VehicleOwnership;
