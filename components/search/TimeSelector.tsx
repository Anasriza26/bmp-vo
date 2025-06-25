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

// 🔥 Generate hours-only time slots (no 30-min gap)
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
    <div className="flex flex-col sm:flex-row gap-4 w-full md:pt-4">
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
          <div key={label} className="w-full sm:w-1/2">
            <label className="block text-sm font-medium mb-2">
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
              <SelectTrigger className="w-full h-12 bg-green-500 text-white border-green-500 hover:bg-green-600">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <SelectValue placeholder={`Select ${label.toLowerCase()} time`} />
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
