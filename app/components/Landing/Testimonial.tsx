import React from "react";
import Image from "next/image";

const Testimonial = () => {
  return (
    <div className="md:px-8 mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8 mt-10 md:mt-8">
      <div className="text-center mb-10">
        <h2 className="font-semibold text-3xl">What Our Client Say</h2>
        <p className="text-gray-400 mt-2">Lorem ipsum dolor sit amet</p>
      </div>
      <div className="md:grid grid-cols-2 gap-2 place-content-center mt-5">
        <Image
          src="/white-car.png"
          alt="white car"
          width={370}
          height={370}
          sizes="100vw"
          className="m-auto md:m-0 mb-10 md:mb-0 "
          priority
        />
        <div>
          <div className="flex flex-row items-center justify-between mt-5 md:mt-0">
            <Image
              src="/star.svg"
              alt="star"
              width={110}
              height={110}
              sizes="100vw"
              priority
            />
            <Image
              src="/annotations.svg"
              alt="annotations"
              width={30}
              height={30}
              sizes="100vw"
              priority
            />
          </div>
          <p className="font-semibold text-md text-black mt-5">
            InsideVin ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <p className="text-sm text-black mt-5 font-normal">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis. Class
            aptent taciti sociosqu ad litora torquent per conubia nostra, per
            inceptos himenaeos. Curabitur tempus urna at turpis condimentum
            lobortis.
          </p>
          <div className="flex flex-row items-center space-x-3 mt-10 md:mt-5 justify-center md:justify-start">
            <Image
              src="/smith-icon.svg"
              alt="user smith"
              width={47}
              height={47}
              sizes="100vw"
              priority
            />
            <p className="font-semibold text-sm">John Smith</p>
          </div>
          <div className="mt-10">
            <Image
              src="/dots.svg"
              alt="dots"
              width={50}
              height={50}
              sizes="100vw"
              className="m-auto md:m-0"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
