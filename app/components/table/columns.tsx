"use client";

import { ColumnDef } from "@tanstack/react-table";
import Image from "next/image";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Report = {
  id?: string;
  brand: string;
  model: string;
  year: string;
  vin: string;
  share: string[];
  download: string;
};

export const columns: ColumnDef<Report>[] = [
  // {
  //   accessorKey: "name",
  //   header: "NAME",
  // },
  {
    accessorKey: "brand",
    header: "BRAND",
  },
  {
    accessorKey: "model",
    header: "MODEL",
  },
  {
    accessorKey: "year",
    header: "YEAR",
  },
  {
    accessorKey: "vin",
    header: "VIN",
  },
  {
    accessorKey: "share",
    header: () => <div className="text-left">SHARE</div>,
    cell: ({ row }) => (
      <div className="flex flex-col md:flex-row flex-wrap items-center space-y-5 md:space-x-5 md:space-y-0">
        <Image
          src="/whatsapp_light.svg"
          className="cursor-pointer"
          height={18}
          width={18}
          alt="pdf"
          priority
          sizes="100vw"
        />
        <Image
          src="/facebook_light.svg"
          className="cursor-pointer"
          height={18}
          width={18}
          alt="pdf"
          priority
          sizes="100vw"
        />
        <Image
          src="/twitter_light.svg"
          className="cursor-pointer"
          height={18}
          width={18}
          alt="pdf"
          priority
          sizes="100vw"
        />
      </div>
    ),
  },
  {
    accessorKey: "download",
    header: () => <div className="text-left">DOWNLOAD</div>,
    cell: ({ row }) => {
      const download = parseFloat(row.getValue("download"));
      // const formatted = new Intl.NumberFormat("en-US", {
      //   style: "currency",
      //   currency: "USD",
      // }).format(amount);

      return (
        <div className="flex flex-row flex-wrap items-center space-x-3 cursor-pointer">
          <Image
            src="/pdf.svg"
            height={18}
            width={18}
            alt="pdf"
            priority
            sizes="100vw"
            className="hidden md:block"
          />
          <span className="hidden md:block">Download</span>
          <Image
            src="/download.svg"
            height={13}
            width={13}
            alt="download"
            priority
            sizes="100vw"
          />
        </div>
      );
    },
  },
];
