import React from "react";

const RootLayout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="md:px-8 mx-auto w-full min-h-screen max-w-screen-xl p-4 py-6 lg:py-8 mt-10 md:mt-8">
      <div className="mt-20">{children}</div>
    </div>
  );
};

export default RootLayout;
