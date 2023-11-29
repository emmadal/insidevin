import React from "react";

const Spinner = ({ placeholder }: { placeholder?: string }) => {
  return placeholder ? (
    <div>
      <span className="flex flex-row items-center space-x-2">
        <div className="h-5 w-5 rounded-full animate-spin border-t-green-1000 border-2 border-gray-400"></div>
        <p className="font-semibold text-sm">{placeholder}</p>
      </span>
    </div>
  ) : (
    <div className="h-5 w-5 rounded-full animate-spin border-t-green-1000 border-2 border-gray-400"></div>
  );
};

export default Spinner;
