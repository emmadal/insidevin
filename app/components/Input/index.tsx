import React, { HTMLInputTypeAttribute } from "react";

const Input = ({
  type,
  name,
  label,
}: {
  type: HTMLInputTypeAttribute;
  name: string;
  label: string;
}) => {
  return (
    <div className="my-5">
      <label htmlFor="" className="font-semibold text-black text-sm">
        {label}
      </label>
      <input
        type={type}
        name={name}
        required
        className="border-2 focus:border-none p-2.5 focus:ring-1 focus:ring-green-1000 focus:outline-none border-gray-200 w-full rounded-md mt-3 bg-white"
      />
    </div>
  );
};

export default Input;
