import SearchVin from "@/app/components/SearchVin";
import { Report, columns } from "@/app/components/table/columns";
import { DataTable } from "@/app/components/table/data-table";
import React from "react";

async function getData(): Promise<Report[]> {
  // Fetch data from your API here.
  return [
    {
      id: "728ed52f",
      name: "Report One",
      brand: "TOYOTA",
      model: "RAV 4",
      year: "2024",
      vin: "HFY362NFLEH482MD",
      share: ["twitter", "whatsapp"],
      download: "https://google.com",
    },
    {
      id: "728edf63",
      name: "Report Two",
      brand: "MERCEDES",
      model: "GLE 4",
      year: "2023",
      vin: "HSN364NAQLDN3DY",
      share: ["twitter", "whatsapp"],
      download: "https://google.com",
    },
  ];
}
const DashboardPage = async () => {
  const data = await getData();
  return (
    <div>
      <div>
        <p className="font-bold text-xl">Dashboard</p>
        <p className="font-normal text-sm text-gray-400">My Report List</p>
      </div>
      <div>
        <SearchVin />
      </div>
      <div>
        <DataTable columns={columns} data={data} />
      </div>
    </div>
  );
};

export default DashboardPage;
