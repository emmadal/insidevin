import React from "react";
import ProfileCard from "../components/ProfileCard.tsx";

const RootLayout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8 min-h-screen">
      <div className="md:grid md:grid-cols-4 gap-3 mt-20 space-x-3">
        <div className="col-span-3">{children}</div>
        <div className="hidden md:block">
          <ProfileCard />
        </div>
      </div>
    </div>
  );
};

export default RootLayout;
