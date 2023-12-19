import React from 'react'
import { CalendarIcon } from '@radix-ui/react-icons';

const DateReport = () => {
  return (
    <div className="bg-teal-100 text-center text-black font-normal pt-1.5 rounded-md mt-5 md:mt-0">
      <span className="inline-flex items-center text-sm">
        <CalendarIcon className="inline w-4 h-4 mr-2" />
        Report generated{" "}
        {new Date().toLocaleDateString("en-US", {
          day: "2-digit",
          month: "numeric",
          year: "numeric",
        })}
      </span>
    </div>
  );
}

export default DateReport;