import React from "react";
import FAQAccordion from "../FAQAccordion";

const Faq = () => {
  return (
    <div className="md:px-8 mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8 mt-10 md:mt-8 mb-20">
      <div className="mb-20">
        <h2 className="font-semibold text-3xl text-center">
          Frequently Asked Questions
        </h2>
      </div>
      <div>
        <FAQAccordion />
      </div>
    </div>
  );
};

export default Faq;
