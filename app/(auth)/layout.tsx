import React from "react";
import Image from "next/image";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-3 place-content-center min-h-screen pt-20 bg-green-1000 place-items-center">
      <div className="hidden md:block">
        <Image
          src="/amico.svg"
          alt="amico"
          priority
          sizes="100vw"
          height={400}
          width={400}
        />
      </div>
      <div className="mb-10">{children}</div>
    </div>
  );
}
