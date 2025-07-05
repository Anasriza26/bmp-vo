"use client";
import React, { useState } from "react";
import BookingHeader from "@/components/makeBooking/BookingHeader";
import FacilityImage from "@/components/makeBooking/FacilityImage";
import DateSelector from "@/components/makeBooking/DateSelector";
import TimeSlotGrid from "@/components/makeBooking/TimeSlotGrid";
import BookingSummary from "@/components/makeBooking/BookingSummery";
import { MoveLeft } from "lucide-react";

const MakeBooking = () => {
  const [selectedDate, setSelectedDate] = useState("22");
  const [selectedSlots, setSelectedSlots] = useState<string[]>([]);

  const handleDateSelect = (date: string) => {
    setSelectedDate(date);
  };

  const handleSlotSelect = (slot: string) => {
    setSelectedSlots((prev) =>
      prev.includes(slot) ? prev.filter((s) => s !== slot) : [...prev, slot]
    );
  };
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-3xl mx-auto  py-8">
        <FacilityImage />

        <BookingHeader
          facilityName="Futsal Prime - FD"
          location="Puttalam, Sri Lanka"
          rating={4.5}
          reviews={127}
        />

        <DateSelector
          selectedDate={selectedDate}
          onDateSelect={handleDateSelect}
        />

        <TimeSlotGrid
          selectedSlots={selectedSlots}
          onSlotSelect={handleSlotSelect}
        />

        <div className="">
          <BookingSummary
            selectedDate={selectedDate}
            selectedSlots={selectedSlots}
            facilityName="Futsal Prime - FD"
            location="Puttalam, Sri Lanka"
            pricePerHour={25}
          />
        </div>

        {/* <div className="mt-8">
          <button className="flex items-center gap-2 text-primary">
            <MoveLeft className="w-4 h-4" />
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default MakeBooking;
