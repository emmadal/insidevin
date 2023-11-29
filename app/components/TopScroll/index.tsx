"use client";
import React, { useEffect, useState } from "react";

const TopScroll = () => {
  const [btnClass, setBtnClass] = useState("md:hidden");
  const handleScrollToTop = () => window.scrollTo(0, 0);

  const hideShowScrollButton = () => {
    if (window.scrollY >= 300) {
      setBtnClass("md:block");
    } else {
      setBtnClass("md:hidden");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", hideShowScrollButton);
    return () => window.addEventListener("scroll", hideShowScrollButton);
  }, []);

  return (
    <button
      className={`hidden ${btnClass} h-12 w-12 bg-green-250 border-none rounded-full p-2 right-8 bottom-8 overflow-hidden items-center text-center content-center fixed ease-linear delay-200 transition-opacity`}
      onClick={handleScrollToTop}
      hidden
    >
      &uarr;
    </button>
  );
};

export default TopScroll;
