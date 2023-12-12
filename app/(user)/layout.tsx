import React from "react";

const RootLayout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8 min-h-screen">
      <div className="mt-20">{children}</div>
    </div>
  );
};

export default RootLayout;
