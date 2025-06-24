"use client";

import { useState } from "react";
import { MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface TimeSlot {
  time: string;
  date?: string;
}

interface Booking {
  id: string;
  name: string;
  location: string;
  timeSlots: TimeSlot[];
  status: "booked" | "completed" | "cancelled";
}

const mockBookings: Booking[] = [
  {
    id: "1",
    name: "Futsal Prime - FD",
    location: "Puttalam, Sri Lanka",
    timeSlots: [
      { time: "11:00 AM", date: "2024.10.23" },
      { time: "07:00 PM", date: "2024.10.23" },
    ],
    status: "booked",
  },
  {
    id: "2",
    name: "R4 Futsal",
    location: "Puttalam, Sri Lanka",
    timeSlots: [
      { time: "08:00 AM", date: "2024.10.26" },
      { time: "09:00 AM", date: "2024.10.26" },
      { time: "08:00 PM", date: "2024.10.24" },
    ],
    status: "booked",
  },
  {
    id: "3",
    name: "R4 Futsal",
    location: "Puttalam, Sri Lanka",
    timeSlots: [
      { time: "08:00 AM", date: "2025.05.26" },
      { time: "09:00 AM", date: "2025.05.26" },
      { time: "08:00 PM", date: "2025.05.24" },
    ],
    status: "cancelled",
  },
  {
    id: "4",
    name: "R4 Futsal",
    location: "Puttalam, Sri Lanka",
    timeSlots: [
      { time: "08:00 AM", date: "2025.06.20" },
      { time: "09:00 AM", date: "2025.06.20" },
      { time: "08:00 PM", date: "2025.06.20" },
    ],
    status: "completed",
  },
];

const CheckBooking = () => {
  const [activeTab, setActiveTab] = useState<
    "booked" | "completed" | "cancelled"
  >("booked");

  const filteredBookings = mockBookings.filter(
    (booking) => booking.status === activeTab
  );

  const getTabButtonClass = (tab: string) => {
    const baseClass =
      "px-4 py-2 rounded-full text-sm font-medium transition-colors";
    if (tab === activeTab) {
      switch (tab) {
        case "booked":
          return `${baseClass} bg-orange-100 text-orange-600 border border-orange-200`;
        case "completed":
          return `${baseClass} bg-green-100 text-green-600 border border-green-200`;
        case "cancelled":
          return `${baseClass} bg-red-100 text-red-600 border border-red-200`;
        default:
          return baseClass;
      }
    }
    return `${baseClass} text-gray-500 hover:text-gray-700 hover:bg-gray-50`;
  };

  const groupTimeSlotsByDate = (timeSlots: TimeSlot[]) => {
    const grouped: { [key: string]: string[] } = {};
    timeSlots.forEach((slot) => {
      const date = slot.date || "2024.10.23";
      if (!grouped[date]) {
        grouped[date] = [];
      }
      grouped[date].push(slot.time);
    });
    return grouped;
  };
  return (
    <>
      <div className="min-h-screen bg-gray-50">
        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-8">
          {/* Header */}
          <div className="flex justify-between items-start mb-6 md:mb-8">
            <div className="flex-1">
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                My Bookings
              </h1>
              <p className="text-gray-600 text-sm md:text-base">
                Your bookings will be shown here
              </p>
            </div>
            <Link href={"/player-profile"}>
              <Avatar className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16">
                <AvatarImage src="/User.jpg" alt="Profile" />
                <AvatarFallback>AR</AvatarFallback>
              </Avatar>
            </Link>
          </div>

          {/* Status Tabs */}
          <div className="flex flex-wrap gap-3 md:gap-4 mb-6 md:mb-8">
            <button
              onClick={() => setActiveTab("booked")}
              className={getTabButtonClass("booked")}
            >
              Booked
            </button>
            <button
              onClick={() => setActiveTab("completed")}
              className={getTabButtonClass("completed")}
            >
              Completed
            </button>
            <button
              onClick={() => setActiveTab("cancelled")}
              className={getTabButtonClass("cancelled")}
            >
              Cancelled
            </button>
          </div>

          {/* Bookings Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6">
            {filteredBookings.map((booking) => {
              const groupedSlots = groupTimeSlotsByDate(booking.timeSlots);

              return (
                <Card
                  key={booking.id}
                  className="bg-white border-0 shadow-sm hover:shadow-md transition-shadow duration-200"
                >
                  <CardContent className="p-4 md:p-6">
                    {/* Booking Title */}
                    <h3 className="text-lg md:text-xl font-semibold text-green-600 mb-2">
                      {booking.name}
                    </h3>

                    {/* Location */}
                    <div className="flex items-center text-gray-600 mb-4 md:mb-6">
                      <MapPin className="w-4 h-4 mr-2 flex-shrink-0" />
                      <span className="text-sm md:text-base">
                        {booking.location}
                      </span>
                    </div>

                    {/* Time Slots by Date */}
                    <div className="space-y-4">
                      {Object.entries(groupedSlots).map(([date, times]) => (
                        <div key={date}>
                          <div className="text-gray-500 text-sm md:text-base font-medium mb-3">
                            {date}
                          </div>
                          <div className="flex flex-wrap gap-2 md:gap-3">
                            {times.map((time, index) => (
                              <Button
                                key={`${date}-${time}-${index}`}
                                className="bg-green-600 hover:bg-green-700 text-white text-xs md:text-sm px-3 py-1.5 md:px-4 md:py-2 h-auto rounded-md font-medium"
                              >
                                <Clock className="w-3 h-3 md:w-4 md:h-4 mr-1.5" />
                                {time}
                              </Button>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Empty State */}
          {filteredBookings.length === 0 && (
            <div className="text-center py-12 md:py-16">
              <div className="text-gray-400 mb-4">
                <Clock className="w-12 h-12 md:w-16 md:h-16 mx-auto" />
              </div>
              <h3 className="text-lg md:text-xl font-medium text-gray-900 mb-2">
                No {activeTab} bookings
              </h3>
              <p className="text-gray-600 text-sm md:text-base">
                You don't have any {activeTab} bookings at the moment.
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CheckBooking;
