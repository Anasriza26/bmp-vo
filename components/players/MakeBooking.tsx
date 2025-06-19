"use client";
import React, { useState } from "react";
import BookingHeader from "@/components/makeBooking/BookingHeader";
import FacilityImage from "@/components/makeBooking/FacilityImage";
import DateSelector from "@/components/makeBooking/DateSelector";
import TimeSlotGrid from "@/components/makeBooking/TimeSlotGrid";
import BookingSummary from "@/components/makeBooking/BookingSummery";

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
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <BookingHeader
              facilityName="Futsal Prime - FD"
              location="Puttalam, Sri Lanka"
              rating={4.5}
              reviews={127}
            />

            <FacilityImage />

            <DateSelector
              selectedDate={selectedDate}
              onDateSelect={handleDateSelect}
            />

            <TimeSlotGrid
              selectedSlots={selectedSlots}
              onSlotSelect={handleSlotSelect}
            />
          </div>

          <div className="lg:col-span-1">
            <BookingSummary
              selectedDate={selectedDate}
              selectedSlots={selectedSlots}
              facilityName="Futsal Prime - FD"
              location="Puttalam, Sri Lanka"
              pricePerHour={25}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MakeBooking;
