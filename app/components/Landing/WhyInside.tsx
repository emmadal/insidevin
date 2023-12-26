import Image from "next/image";
import React from "react";

const WhyInside = () => {
  return (
    <div
      className="md:px-8 mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8 mt-10 md:mt-8 section_id"
      id="vin-check"
    >
      <div className="text-center mb-10">
        <h2 className="font-semibold text-3xl">Why InsideVin VIN Check?</h2>
        <p className="text-gray-400 mt-2">
          Lorem ipsum dolor sit amet, consect
        </p>
      </div>
      <div className="md:grid grid-cols-3 gap-8 p-5 md:p-0">
        <div className="border border-white border-5 p-5 rounded-md my-5 md:my-0 shadow-xl md:w-3/22">
          <Image
            src="/wallet.svg"
            alt="wallet"
            sizes="100vw"
            height={80}
            width={80}
            priority
            className="mx-auto"
          />
          <div className="mt-11">
            <span>
              <p className="text-center text-md font-semibold">
                InsideVin gives you the
              </p>
              <p className="text-center text-md font-semibold">
                best value for your money
              </p>
            </span>
            <p className="text-gray-400 text-center mt-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquet odio mattis.
            </p>
          </div>
        </div>
        <div className="border border-white border-5 p-5 rounded-md my-5 md:my-0 shadow-xl md:w-3/22">
          <Image
            src="/rocket.svg"
            alt="rocket"
            sizes="100vw"
            height={80}
            width={80}
            priority
            className="mx-auto"
          />
          <div className="mt-11">
            <span>
              <p className="text-center text-md font-semibold">
                Fast, no-hassle
              </p>
              <p className="text-center text-md font-semibold">turn around</p>
            </span>
            <p className="text-gray-400 text-center mt-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquet odio mattis.
            </p>
          </div>
        </div>
        <div className="border border-white border-5 p-5 rounded-md my-5 md:my-0 shadow-xl md:w-3/22">
          <Image
            src="/guard.svg"
            alt="guard"
            sizes="100vw"
            height={80}
            width={80}
            priority
            className="mx-auto"
          />
          <div className="mt-11">
            <span>
              <p className="text-center text-md font-semibold">
                InsideVin takes the
              </p>
              <p className="text-center text-md font-semibold">
                mystery out of the history
              </p>
            </span>
            <p className="text-gray-400 text-center mt-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquet odio mattis.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyInside;
