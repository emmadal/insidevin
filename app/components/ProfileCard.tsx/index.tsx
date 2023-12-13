import React from "react";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getServerSession } from "next-auth";
import LogoutButton from "./logout-button";
import { authOptions } from "@/lib/authoptions";

const ProfileCard = async () => {
  const session = await getServerSession(authOptions);
  return session?.user ? (
    <Card className="w-[280px] overflow-auto">
      <CardHeader>
        <CardTitle>{session?.user?.name}</CardTitle>
        <CardDescription>{session?.user?.email}</CardDescription>
        <LogoutButton />
      </CardHeader>
    </Card>
  ) : null;
};

export default ProfileCard;
