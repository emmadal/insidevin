"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const NavBar = () => {
  const [navbar, setNavbar] = useState(false);
  const handleNavbar = () => setNavbar(!navbar);
  const { data: session } = useSession();
  const router = useRouter();

  const handleWindowSize = () => {
    const size = window.innerWidth;
    if (size > 640) {
      setNavbar(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleWindowSize);
    return () => window.removeEventListener("resize", handleWindowSize);
  }, []);

  return (
    <nav className="w-full fixed top-0 right-0 left-0 z-10 py-1 bg-green-1000">
      <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
        <div>
          <div className="flex items-center justify-between py-3 md:block">
            {/* Logo */}
            <Link href="/">
              <Image
                src="/logo.png"
                alt="Logo"
                width={100}
                height={100}
                priority
              />
            </Link>
            {/* Hamburger button for mobile */}
            <div className="md:hidden">
              <button
                className="bg-white p-2 rounded-md outline-none"
                onClick={handleNavbar}
              >
                {navbar ? (
                  <Image
                    src="/cross.svg"
                    sizes="100vw"
                    alt="menu-burger"
                    width={22}
                    height={22}
                    className="focus:border-none active:border-none"
                  />
                ) : (
                  <Image
                    src="/menu-burger.svg"
                    sizes="100vw"
                    alt="menu-burger"
                    width={22}
                    height={22}
                    className="focus:border-none active:border-none"
                  />
                )}
              </button>
            </div>
          </div>
        </div>
        <div>
          {/* Menu items */}
          <div
            className={
              !navbar
                ? "justify-between space-x-10 hidden md:block md:pb-0 md:mt-0"
                : "flex space-y-7 flex-col items-center justify-center md:flex sm:pb-0 pb-5"
            }
          >
            <Link
              href="/"
              className="active active:border-green-700 bg-green-950 p-2 rounded-sm font-bold hover:text-white border-white font-sans text-green-250"
              onClick={() => setNavbar(false)}
            >
              Home
            </Link>
            <Link
              href="/#vin-check"
              className="text-white font-sans text-base hover:text-green-500"
              onClick={() => setNavbar(false)}
            >
              VIN Check
            </Link>
            <Link
              href="/privacy-policy"
              className="text-white font-sans text-base hover:text-green-500"
              onClick={() => setNavbar(false)}
            >
              Privacy Policy
            </Link>
            <Link
              href="/contact-us"
              className="text-white text-base hover:text-green-500 font-sans"
              onClick={() => setNavbar(false)}
            >
              Contact Us
            </Link>
            {!session?.user ? (
              <button
                className="font-sans text-base rounded-full py-1.5 px-7 md:ml-10 bg-green-250 transition-colors duration-300 ease-in-out hover:bg-white"
                onClick={() => {
                  setNavbar(false);
                  router.push("/login");
                }}
              >
                Login
              </button>
            ) : (
              <button
                className="font-sans text-base rounded-full py-1.5 px-7 md:ml-10 bg-white transition-colors duration-300 ease-in-out hover:bg-green-250"
                onClick={() => {
                  setNavbar(false);
                  signOut({ callbackUrl: "/" });
                }}
              >
                Log out
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
