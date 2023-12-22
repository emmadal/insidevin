import React from "react";
import Image from "next/image";
import Link from "next/link";
import Subscription from "./Subscription";

const Footer = () => {
  return (
    <footer className="bottom-0 left-0 right-0 w-full mt-auto bg-green-1000">
      <div className="md:px-8 mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="flex md:justify-between justify-center items-center flex-col md:flex-row">
          <div className="md:mb-0">
            <Link href="/">
              <Image
                src="/logo.png"
                alt="Logo"
                width={100}
                height={100}
                priority
              />
            </Link>
            <div className="mt-10 md:mt-20 mb-10 md:mb-0">
              <p className="font-sans text-white text-sm">
                Follow us on social media
              </p>
              <div className="flex flex-row mt-5 items-center space-x-5">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/instagram.svg"
                    width={20}
                    height={30}
                    alt="Instagram"
                    className="bg-transparent"
                  />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/facebook.svg"
                    width={20}
                    height={30}
                    alt="Facebook"
                    className="bg-transparent"
                  />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/linkedin.svg"
                    width={20}
                    height={30}
                    alt="LinkedIn"
                    className="bg-transparent"
                  />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/twitter.svg"
                    width={20}
                    height={30}
                    alt="Twitter"
                    className="bg-transparent"
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-md text-white font-semibold uppercase">
                Explore
              </h2>
              <ul className="space-y-5">
                <li className="flex flex-row items-center text-white text-sm md:hover:underline space-x-2">
                  <Image
                    src="/chevron.svg"
                    alt="chevron-right"
                    width={8}
                    height={8}
                    className="bg-transparent"
                  />{" "}
                  <Link href="/">Home</Link>
                </li>
                <li className="flex flex-row items-center text-white text-sm md:hover:underline space-x-2">
                  <Image
                    src="/chevron.svg"
                    alt="chevron-right"
                    width={8}
                    height={8}
                    className="bg-transparent"
                  />{" "}
                  <Link href="/#vin-check">VIN Check</Link>
                </li>
                <li className="flex flex-row items-center text-white text-sm md:hover:underline space-x-2">
                  <Image
                    src="/chevron.svg"
                    alt="chevron-right"
                    width={8}
                    height={8}
                    className="bg-transparent"
                  />{" "}
                  <Link href="/privacy-policy">Privacy Policy</Link>
                </li>
                <li className="flex flex-row items-center text-white text-sm md:hover:underline space-x-2">
                  <Image
                    src="/chevron.svg"
                    alt="chevron-right"
                    width={8}
                    height={8}
                    className="bg-transparent"
                  />{" "}
                  <Link href="/contact-us">Contact Us</Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-md text-white font-semibold uppercase">
                Support
              </h2>
              <ul className="space-y-5">
                <li className="flex flex-row items-center text-white text-sm md:hover:underline space-x-2">
                  <Image
                    src="/chevron.svg"
                    alt="chevron-right"
                    width={8}
                    height={8}
                    className="bg-transparent"
                  />{" "}
                  <Link href="/terms">Terms &amp; Policy</Link>
                </li>
                <li className="flex flex-row items-center text-white text-sm md:hover:underline space-x-2">
                  <Image
                    src="/chevron.svg"
                    alt="chevron-right"
                    width={8}
                    height={8}
                    className="bg-transparent"
                  />{" "}
                  <Link href="/privacy-policy">Privacy Policy</Link>
                </li>
                <li className="flex flex-row items-center text-white text-sm md:hover:underline space-x-2">
                  <Image
                    src="/chevron.svg"
                    alt="chevron-right"
                    width={8}
                    height={8}
                    className="bg-transparent"
                  />{" "}
                  <Link href="/conditions">Conditions</Link>
                </li>
                <li className="flex flex-row items-center text-white text-sm md:hover:underline space-x-2">
                  <Image
                    src="/chevron.svg"
                    alt="chevron-right"
                    width={8}
                    height={8}
                    className="bg-transparent"
                  />{" "}
                  <Link href="/contact-us">Contact Us</Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-md text-white font-semibold uppercase">
                Get in touch
              </h2>
              <Subscription />
            </div>
          </div>
        </div>
        <hr className="mx-auto my-10" />
        <p className="text-center text-white text-sm">
          &#169; Copyright{" "}
          <Link href="/" className="hover:underline">
            InsideVin
          </Link>
          . All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
