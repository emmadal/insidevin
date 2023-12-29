"use client";

import React, { memo, useRef, useState } from "react";
import dynamic from "next/dynamic";
import { useFormState, useFormStatus } from "react-dom";
import Link from "next/link";
import Image from "next/image";
import Spinner from "../Spinner";
import { searchVin } from "@/app/action";
const ModalVIN = dynamic(() => import("../ModalVin"));

const SubmitForm = memo(function SubmitForm() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="border-none flex flex-row items-center rounded-md px-7 justify-center hover:shadow-lg sm:w-auto disabled:bg-slate-20 bg-green-250 disabled:bg-neutral-300"
      aria-disabled={pending}
    >
      {pending ? (
        <Spinner placeholder="Searching" />
      ) : (
        <>
          <Image
            src="/search-normal.svg"
            alt="search"
            width={17}
            height={17}
            className="bg-transparent mr-3"
          />
          Search
        </>
      )}
    </button>
  );
});

const SearchVin = () => {
  const [open, setOpen] = useState(false);
  const [response, formAction] = useFormState(searchVin, null);
  const ref = useRef<HTMLFormElement>(null);
  return (
    <div className="mt-10 md:mt-10">
      {open && <ModalVIN open={open} setOpen={setOpen} />}
      <form
        ref={ref}
        action={formAction}
        className="border-2 border-neutral-50 p-3 shadow-lg w-full flex flex-row space-x-5 rounded-xl"
      >
        <input
          type="text"
          maxLength={17}
          required
          name="vin"
          placeholder="ENTER VIN"
          className="border-none focus:ring-0 outline-none focus:ring-transparent py-4 w-full text-lg"
        />
        <SubmitForm />
      </form>
      <p className="text-red-500 font-semibold text-justify my-1">
        {response?.message}
      </p>
      <div className="flex flex-row flex-wrap items-center justify-between mt-4 font-normal underline text-sm pb-10">
        <Link
          href=""
          className="text-normal text-blue-500"
          onClick={() => setOpen(true)}
        >
          Where to find VIN?
        </Link>
        <Link href="/sample-report" className="text-normal text-blue-500">
          View Sample Report
        </Link>
      </div>
    </div>
  );
};

export default SearchVin;
