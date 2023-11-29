"use client";
import { getInTouchForm } from "@/app/action";
import React from "react";

const Subscription = () => {
  return (
    <form action={getInTouchForm} className="flex flex-col md:block w-full">
      <input
        type="email"
        name="email"
        required
        placeholder="Enter your Email"
        className="block w-full p-2 rounded-md focus:ring-0 outline-none focus:ring-transparent bg-transparent text-white border border-white b-1"
      />
      <button
        type="submit"
        className="rounded-full mt-5 text-black text-center text-sm font-light py-2 px-5 bg-green-250"
      >
        Subscribe
      </button>
    </form>
  );
};

export default Subscription;
