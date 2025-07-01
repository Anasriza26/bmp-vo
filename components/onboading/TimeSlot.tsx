"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Clock } from "lucide-react";
import ProgressStepper from "../progress-stepper/Progress";
import CommonLogo from "../common/CommonLogo";

import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

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
  const [showValidation, setShowValidation] = useState(false);

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
    setShowValidation(false);
  };

  const handleDelete = (id: number) => {
    setTimeRows(timeRows.filter((row) => row.id !== id));
  };

  const isFormValid = () => {
    return timeRows.length > 0;
  };

  return (
    <>
      <CommonLogo />

      <div className="font-semibold mt-2">
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

      <div className="justify-center items-center flex flex-col mt-4">
        <h2 className="font-semibold text-xl font-inter text-center md:text-2xl">
          Set your operating hours
        </h2>
        <p className="font-normal text-[#667085] mt-1 text-center md:text-[14px] text-8px">
          Define when your facility is open for bookings and set your base
          pricing structure.
        </p>
      </div>

      <div className="bg-white max-w-4xl mx-auto space-y-4 flex flex-col items-center py-4">
        {/* Time Selector */}
        <div className="flex flex-wrap sm:flex-nowrap gap-2 sm:gap-4 items-center justify-center">
          {/* Start Time */}
          <div className="w-[110px] sm:w-[140px] relative">
            <Select value={startTime} onValueChange={setStartTime}>
              <SelectTrigger className="pl-8">
                <Clock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-green-600" />
                <SelectValue placeholder="Start time" />
              </SelectTrigger>
              <SelectContent>
                {timeOptions.map((time) => (
                  <SelectItem key={time} value={time}>
                    {time}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* End Time */}
          <div className="w-[110px] sm:w-[140px] relative">
            <Select value={endTime} onValueChange={setEndTime}>
              <SelectTrigger className="pl-8">
                <Clock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-green-600" />
                <SelectValue placeholder="End time" />
              </SelectTrigger>
              <SelectContent>
                {timeOptions.map((time) => (
                  <SelectItem key={time} value={time}>
                    {time}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Add Button */}
          <button
            onClick={handleAdd}
            className="bg-green-600 text-white rounded-md 
            px-3 py-1.5 
            text-xs sm:text-sm 
            w-[70px] sm:w-[100px]
            font-semibold"
          >
            Add
          </button>
        </div>

        {/* Validation Message */}
        {showValidation && timeRows.length === 0 && (
          <div className="text-red-600 text-sm text-center">
            Please add at least one time slot to continue.
          </div>
        )}

        {/* Selected Time Rows */}
        <div className="space-y-2">
          {timeRows.map((row) => (
            <div
              key={row.id}
              className="flex flex-wrap sm:flex-nowrap gap-2 sm:gap-4 items-center justify-center"
            >
              <button
                type="button"
                className="border border-green-600 rounded-md 
                pl-8 pr-3 py-1.5 text-green-600 font-semibold 
                text-xs sm:text-sm 
                w-[110px] sm:w-[140px] 
                cursor-default relative"
              >
                <Clock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-green-600" />
                {row.start}
              </button>

              <button
                type="button"
                className="border border-green-600 rounded-md 
                pl-8 pr-3 py-1.5 text-green-600 font-semibold 
                text-xs sm:text-sm 
                w-[110px] sm:w-[140px] 
                cursor-default relative"
              >
                <Clock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-green-600" />
                {row.end}
              </button>

              <button
                onClick={() => handleDelete(row.id)}
                className="border border-red-600 text-red-600 rounded-md
                px-3 py-1.5 
                text-xs sm:text-sm 
                w-[70px] sm:w-[100px] 
                font-semibold"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-6xl mx-auto p-4 space-y-6 mt-1">
        <div className="flex flex-row sm:grid sm:grid-cols-3 gap-4">
          {/* Back Button */}
          <div className="flex-1">
            <button
              type="button"
              className="w-full border rounded-md py-2 text-btncolor border-btncolor"
            >
              Back
            </button>
          </div>

          {/* Placeholder for Center */}
          <div className="hidden sm:block">
            <div className="relative"></div>
          </div>

          {/* Next Button */}
          <div className="flex-1">
            {isFormValid() ? (
              <Link href="/week-rate">
                <button
                  type="button"
                  className="w-full border border-gray-300 rounded-md py-2 text-white bg-btncolor"
                >
                  Next
                </button>
              </Link>
            ) : (
              <button
                type="button"
                disabled
                className="w-full border border-gray-300 rounded-md py-2 text-white bg-btncolor opacity-50 cursor-not-allowed"
                title="Please fill all required fields"
              >
                Next
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Timeslot;
