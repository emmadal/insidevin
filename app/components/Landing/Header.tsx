import Image from "next/image";
import React from "react";
import styles from "./landing.module.css";
import SearchVin from "../SearchVin";

const Header = () => {
  return (
    <div className="md:grid grid-cols-2 gap-2 pt-10">
      <div className="md:pl-28 pt-24 md:px-0 px-5">
        <h2 className="font-semibold text-3xl">CHECK VIN FULL HISTORY</h2>
        <p className="text-neutral-500 mt-10 w-full sm:w-3/4 text-justify">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          vulputate libero et velit interdum, ac aliquet odio mattis. Class
          aptent taciti sociosqu ads.
        </p>
        <SearchVin />
      </div>
      <div className="hidden md:block">
        <div
          className={`${styles.sideCar} hidden md:block items-center justify-items-center bg-green-250`}
        ></div>
        <Image
          src="/car.png"
          alt="car"
          sizes="100vw"
          height={600}
          width={370}
          priority
          className="bg-transparent md:absolute top-20 mt-28 md:ml-56"
        />
      </div>
    </div>
  );
};

export default Header;
