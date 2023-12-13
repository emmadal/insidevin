import React from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="grid min-h-screen pt-20 bg-gray-25 place-items-center">
      <div>{children}</div>
    </div>
  );
}
