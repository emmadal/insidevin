'use client'
import React from 'react'
import { Disclosure, Transition } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";
import { faqStore } from '@/app/constants/faqStore'

const FAQAccordion = () => {
  return (
    <div className="md:grid grid-cols-2 gap-8 space-y-10 sm:space-y-0">
      {faqStore.map((store) => (
        <div key={store.title}>
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full justify-between rounded-lg bg-slate-100 p-5 text-left text-xl font-semibold focus:outline-none focus:ring-0">
                  <span>{store.title}</span>
                  <ChevronUpIcon
                    className={`${
                      open ? "rotate-180 transform" : ""
                    } h-5 w-5 text-black`}
                  />
                </Disclosure.Button>
                <Transition
                  enter="transition duration-100 ease-in"
                  enterFrom="transform scale-95 opacity-0"
                  enterTo="transform scale-100 opacity-100"
                  leave="transition duration-75 ease-out"
                  leaveFrom="transform scale-100 opacity-100"
                  leaveTo="transform scale-95 opacity-0"
                >
                  <Disclosure.Panel className="px-4 pb-2 pt-4 font-normal text-md text-black">
                    {store.content}
                  </Disclosure.Panel>
                </Transition>
              </>
            )}
          </Disclosure>
        </div>
      ))}
    </div>
  );
}

export default FAQAccordion;