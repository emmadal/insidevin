import React from "react";
import ProfileCard from "../components/ProfileCard.tsx";

const RootLayout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="md:px-8 mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8 min-h-screen">
      <div className="w-full md:grid md:grid-cols-3 gap-8 mt-20 space-x-16">
        <div className="col-span-2">{children}</div>
        <div className="hidden md:block">
          <ProfileCard />
        </div>
      </div>
    </div>
  );
};

export default RootLayout;
