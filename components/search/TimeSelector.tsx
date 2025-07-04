"use client";

import { Clock } from "lucide-react";
import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

function generateHourSlots() {
  const times: string[] = [];
  const start = 6; // 6 AM
  const end = 23; // 11 PM

  for (let hour = start; hour <= end; hour++) {
    const suffix = hour >= 12 ? "PM" : "AM";
    const displayHour = ((hour + 11) % 12) + 1;
    const formatted = `${displayHour.toString().padStart(2, "0")}:00 ${suffix}`;
    times.push(formatted);
  }
  return times;
}

const timeSlots = generateHourSlots();

export default function TimeSelector({
  startTime,
  setStartTime,
  endTime,
  setEndTime,
}: any) {
  const getMinutes = (timeStr: string) => {
    const [time, suffix] = timeStr.split(" ");
    const [hours, minutes] = time.split(":").map(Number);
    let mins = (hours % 12) * 60 + minutes;
    if (suffix === "PM") mins += 12 * 60;
    return mins;
  };

  return (
    <div className="grid grid-cols-2 gap-2 md:mt-[2px]">
      {["Start", "End"].map((label, i) => {
        const selected = i === 0 ? startTime : endTime;
        const setSelected = i === 0 ? setStartTime : setEndTime;

        const disableTime = (time: string) => {
          if (i === 1 && startTime) {
            return getMinutes(time) < getMinutes(startTime);
          }
          return false;
        };

        return (
          <div key={label} className="">
            <label className="block text-sm font-semibold mb-2 mt:mb-3 md:text-base">
              {label} Time
            </label>
            <Select
              value={selected}
              onValueChange={(value) => {
                setSelected(value);
                if (i === 0 && endTime) {
                  if (getMinutes(value) > getMinutes(endTime)) {
                    setEndTime("");
                  }
                }
              }}
            >
              <SelectTrigger className="h-auto bg-green-500 text-white border-green-500 hover:bg-green-600">
                <div className=" flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  <SelectValue
                    placeholder={`Select ${label.toLowerCase()} time`}
                    className=""
                  />
                </div>
              </SelectTrigger>
              <SelectContent>
                {timeSlots.map((time) => (
                  <SelectItem
                    key={time}
                    value={time}
                    disabled={disableTime(time)}
                  >
                    {time}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        );
      })}
    </div>
  );
}
