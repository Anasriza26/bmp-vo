"use client";

import {
  Sun,
  Moon,
  TrendingUp,
} from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import CommonCard from "@/components/common/CommonCard";

const weekDays = [
  { day: "TODAY", date: "22", active: true },
  { day: "SAT", date: "23" },
  { day: "SUN", date: "24" },
  { day: "MON", date: "25" },
  { day: "TUE", date: "26" },
  { day: "WED", date: "27" },
  { day: "THU", date: "28" },
];

const morningSlots = [
  { time: "6.00 AM", available: true },
  { time: "7.00 AM", available: true },
  { time: "8.00 AM", available: true },
  { time: "9.00 AM", available: true },
  { time: "10.00 AM", available: true },
  { time: "11.00 AM", available: false, booked: true },
  { time: "12.00 AM", available: true },
  { time: "1.00 PM", available: true },
  { time: "2.00 PM", available: true },
  { time: "3.00 PM", available: true },
  { time: "4.00 PM", available: true },
];

const eveningSlots = [
  { time: "5.00 PM", available: false, booked: true },
  { time: "6.00 PM", available: true },
  { time: "7.00 PM", available: true },
  { time: "8.00 PM", available: true },
  { time: "9.00 PM", available: true },
  { time: "10.00 PM", available: true },
  { time: "11.00 PM", available: true },
  { time: "12.00 PM", available: true },
  { time: "01.00 AM", available: true },
  { time: "02.00 AM", available: true },
];

export default function DashboardPage() {
  return (
    <div className="flex flex-col overflow-x-hidden mx-4">
      <header className="bg-white border-b py-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="md:text-2xl font-semibold text-gray-900 text-lg">
              Welcome back,{" "}
              <span className="text-green-500">Administrator</span>
            </h1>
            <p className="text-gray-600 mt-1 text-xs md:text-lg">
              Track, manage and forecast your turf dashboard.
            </p>
          </div>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-4">
        <CommonCard
          title="Total Bookings"
          value="27"
          subtitle="40% vs last month"
          subtitleIcon={TrendingUp}
          subtitleColor="text-green-600"
        />
        <CommonCard
          title="Total Earnings"
          value="LKR 27,500"
          valueColor="text-green-500"
          subtitle="40% vs last month"
          subtitleIcon={TrendingUp}
          subtitleColor="text-green-600"
        />
        <CommonCard
          title="Wallet Balance"
          value="LKR 35,500"
          valueColor="text-green-500"
          subtitle="Last updated on August"
        />
      </div>

      <div className="mt-4">
        <Card>
          <CardHeader>
            <CardTitle className="text-xl font-semibold">
              Booking Calendar
            </CardTitle>
          </CardHeader>
          <CardContent>
            {/* Week Days */}
            <div className="grid grid-cols-7 gap-1 mb-8">
              {weekDays.map((day) => (
                <div
                  key={day.date}
                  className={`flex flex-col items-center px-2 py-2 rounded-lg ${
                    day.active
                      ? "bg-green-500 text-white"
                      : "bg-gray-100 text-gray-700"
                  }`}
                >
                  <span className="text-[9px] sm:text-xs md:text-sm">
                    {day.day}
                  </span>
                  <span className="text-xs sm:text-sm md:text-base font-semibold">
                    {day.date}
                  </span>
                </div>
              ))}
            </div>

            {/* Morning Slots */}
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-4">
                <Sun className="w-5 h-5 text-yellow-500" />
                <h3 className="text-lg font-semibold">Morning Slots</h3>
              </div>
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3">
                {morningSlots.map((slot) => (
                  <Button
                    key={slot.time}
                    variant={slot.booked ? "default" : "outline"}
                    className={`h-12 ${
                      slot.booked
                        ? "bg-green-500 hover:bg-green-600 text-white"
                        : "border-green-200 hover:border-green-300"
                    }`}
                  >
                    {slot.time}
                  </Button>
                ))}
              </div>
            </div>

            {/* Evening Slots */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Moon className="w-5 h-5 text-blue-500" />
                <h3 className="text-lg font-semibold">Evening Slots</h3>
              </div>
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3">
                {eveningSlots.map((slot) => (
                  <Button
                    key={slot.time}
                    variant={slot.booked ? "default" : "outline"}
                    className={`h-12 ${
                      slot.booked
                        ? "bg-green-500 hover:bg-green-600 text-white"
                        : "border-green-200 hover:border-green-300"
                    }`}
                  >
                    {slot.time}
                  </Button>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
