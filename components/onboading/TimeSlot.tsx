'use client';

import React from "react";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../assets/BMP-Logo.jpg";
import ProgressStepper from "../progress-stepper/Progress";

interface TimeRow {
  id: number;
  start: string;
  end: string;
}

const Timeslot = () => {
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [timeRows, setTimeRows] = useState<TimeRow[]>([]);
  const [nextId, setNextId] = useState(1);

  const timeOptions = [
    "10 AM",
    "11 AM",
    "12 PM",
    "1 PM",
    "2 PM",
    "3 PM",
    "4 PM",
    "5 PM",
  ];

  const handleAdd = () => {
    if (!startTime || !endTime) {
      alert("Please select both Start Time and End Time.");
      return;
    }

    if (timeOptions.indexOf(endTime) <= timeOptions.indexOf(startTime)) {
      alert("End Time must be after Start Time.");
      return;
    }

    const newRow: TimeRow = { id: nextId, start: startTime, end: endTime };
    setTimeRows([...timeRows, newRow]);
    setNextId(nextId + 1);
    setStartTime("");
    setEndTime("");
  };

  const handleDelete = (id: number) => {
    setTimeRows(timeRows.filter((row) => row.id !== id));
  };

  return (
    <>
      <div>
        <div className="mt-[60px] ml-[60px]">
          <Image src={Logo} alt="Owner Details" width={133} height={42} />
        </div>

        <div className="font-semibold">
          <ProgressStepper
            currentStep={4.5}
            steps={[
              { label: "Account Setup" },
              { label: "Turf Information" },
              { label: "Business Details" },
              { label: "Scheduling & Rates" },
              { label: "Payment & Completion" },
            ]}
          />
        </div>

        <div className="justify-center items-center flex flex-col mt-[40px]">
          <h2 className="font-semibold text-2xl font-inter text-center">
            Set your operating hours
          </h2>
          <p className="font-normal text-[#667085] mt-[10px] text-center">
            Define when your facility is open for bookings and set <br /> your
            base pricing structure.
          </p>
        </div>

        <div className="bg-white p-6 max-w-4xl mx-auto space-y-4 flex flex-col items-center">
          <div className="flex flex-wrap gap-6 items-center mb-4 justify-center">
            <select
              value={startTime}
              onChange={(e) => setStartTime(e.target.value)}
              className="border border-green-600 rounded-md px-4 py-2 text-green-600 font-semibold text-sm min-w-[140px] cursor-pointer"
            >
              <option value="" disabled>
            ⏰ Start Time
              </option>
              {timeOptions.map((time) => (
            <option key={time} value={time}>
              {time}
            </option>
              ))}
            </select>

            <select
              value={endTime}
              onChange={(e) => setEndTime(e.target.value)}
              className="border border-green-600 rounded-md px-4 py-2 text-green-600 font-semibold text-sm min-w-[140px] cursor-pointer"
            >
              <option value="" disabled>
            ⏰ End Time
              </option>
              {timeOptions.map((time) => (
            <option key={time} value={time}>
              {time}
            </option>
              ))}
            </select>

            <button
              onClick={handleAdd}
              className="bg-green-600 text-white rounded-md px-6 py-2 font-semibold text-sm min-w-[100px]"
            >
              Add
            </button>
          </div>

          <div className="space-y-4">
            {timeRows.map((row) => (
              <div key={row.id} className="flex flex-wrap gap-6 items-center justify-center">
            <button
              type="button"
              className="flex items-center gap-2 border border-gray-300 rounded-md px-4 py-2 text-gray-700 font-normal text-sm min-w-[140px] justify-center"
            >
              <i className="far fa-clock"></i> {row.start}
            </button>
            <button
              type="button"
              className="flex items-center gap-2 border border-gray-300 rounded-md px-4 py-2 text-gray-700 font-normal text-sm min-w-[140px] justify-center"
            >
              <i className="far fa-clock"></i> {row.end}
            </button>
            <button
              onClick={() => handleDelete(row.id)}
              className="border border-red-600 text-red-600 rounded-md px-6 py-2 font-semibold text-sm min-w-[100px]"
            >
              Delete
            </button>
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-7xl mx-auto p-4 space-y-10 mt-[100px]">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 ">
            <div className="relative">
              <button
                type="button"
                className="w-full border rounded-md py-2 text-btncolor border-btncolor "
              >
                Back
              </button>
            </div>
            <div>
              <div className="relative">
                {/* Placeholder for additional content or input */}
              </div>
            </div>
            <div>
              <Link href="/weekrate"><button
                type="button"
                className="w-full border border-gray-300 rounded-md py-2 text-white bg-btncolor"
              >
                Next
              </button></Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Timeslot;