import React from "react";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import LogoutButton from "./logout-button";

const ProfileCard = async () => {
  const session = await getServerSession(authOptions);
  return (
    <Card className="w-[320px] overflow-auto">
      <CardHeader>
        <CardTitle>{session?.user?.name}</CardTitle>
        <CardDescription>{session?.user?.email}</CardDescription>
        {session?.user ? <LogoutButton /> : null}
      </CardHeader>
    </Card>
  );
};

export default ProfileCard;
