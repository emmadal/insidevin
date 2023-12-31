import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import NavBar from "./components/Navbar";
import Footer from "./components/Footer";
import TopScroll from "./components/TopScroll";
import AuthProvider from "./session-provider/provider";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authoptions";
import { Analytics } from "@vercel/analytics/react";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://insidevin.com"),
  title: "InsideVin - CAR VIN checker",
  description: "CAR VIN checker",
  creator: "InsideVin Team",
  applicationName: "InsideVin",
  publisher: "InsideVin",
  authors: [{ name: "InsideVin Team", url: "https://insidevin.com" }],
  generator: "InsideVin",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://insidevin.com",
    title: "InsideVin - CAR VIN checker",
    description: "CAR VIN checker",
    siteName: "InsideVin - CAR VIN checker",
    images: [
      {
        url: "https://insidevin.com/logo.png",
      },
    ],
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);
  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        <AuthProvider session={session}>
          <NavBar />
          <div>
            {children}
            <TopScroll />
          </div>
          <Footer />
        </AuthProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
