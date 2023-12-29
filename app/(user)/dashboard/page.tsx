import React from "react";
import { getAllDataByUserEmail } from "@/app/action";
import ProfileCard from "@/app/components/ProfileCard.tsx";
import { columns } from "@/app/components/table/columns";
import { DataTable } from "@/app/components/table/data-table";
import { getServerSession } from "next-auth";

const DashboardPage = async () => {
  const session = await getServerSession();

  const data: any = await getAllDataByUserEmail(
    "sales_history",
    session?.user?.email || null,
  );

  return (
    <div className="md:grid grid-cols-4 gap-3 space-x-3">
      <div className="col-span-3">
        <div>
          <p className="font-bold text-xl">Dashboard</p>
          <p className="font-normal text-sm text-gray-400">My Report List</p>
        </div>
        <div className="w-full mt-5">
          <DataTable columns={columns} data={data} />
        </div>
      </div>
      <div className="hidden md:block">
        <ProfileCard />
      </div>
    </div>
  );
};

export default DashboardPage;
