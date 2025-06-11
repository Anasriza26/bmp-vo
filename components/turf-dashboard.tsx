"use client"
import { useState } from "react"
import {
  Home,
  Calendar,
  Layers,
  Clock,
  CalendarDays,
  Wallet,
  MapPin,
  Percent,
  User,
  Settings,
  Bell,
  MoreHorizontal,
  Sun,
  Moon,
  TrendingUp,
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

import { BookingsPage } from "./bookings-page"
import { ProfilePage } from "./profile-page"
import { SidebarInset, SidebarProvider } from "./ui/sidebar"
import AppSidebar from "./common/Sidebar"



const weekDays = [
  { day: "TODAY", date: "22", active: true },
  { day: "SAT", date: "23" },
  { day: "SUN", date: "24" },
  { day: "MON", date: "25" },
  { day: "TUE", date: "26" },
  { day: "WED", date: "27" },
  { day: "THU", date: "28" },
  { day: "FRI", date: "29" },
]

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
]

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
]


export function TurfDashboard() {
  const [currentPage, setCurrentPage] = useState("dashboard")

  return (
    <SidebarProvider>
      <div className="flex min-h-screen bg-gray-50">
        <AppSidebar currentPage={currentPage} setCurrentPage={setCurrentPage} />
        <SidebarInset className="flex-1">
          <div className="flex flex-col">
            {/* Header */}
            {currentPage === "dashboard" && (
              <header className="bg-white border-b border-gray-200 px-6 py-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h1 className="text-2xl font-semibold text-gray-900">
                      Welcome back, <span className="text-green-500">Administrator</span>
                    </h1>
                    <p className="text-gray-600 mt-1">Track, manage and forecast your turf dashboard.</p>
                  </div>
                  <Button variant="ghost" size="icon">
                    <Bell className="w-5 h-5" />
                  </Button>
                </div>
              </header>
            )}

            {/* Main Content */}
            <main className={`flex-1 ${currentPage === "dashboard" ? "p-6" : ""}`}>
              {currentPage === "dashboard" && (
                <>
                  {/* Stats Cards */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <Card>
                      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium text-gray-600">Total Bookings</CardTitle>
                        <Button variant="ghost" size="icon" className="w-4 h-4">
                          <MoreHorizontal className="w-4 h-4" />
                        </Button>
                      </CardHeader>
                      <CardContent>
                        <div className="text-3xl font-bold text-gray-900">27</div>
                        <div className="flex items-center text-sm text-green-600 mt-2">
                          <TrendingUp className="w-4 h-4 mr-1" />
                          40% vs last month
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium text-gray-600">Total Earnings</CardTitle>
                        <Button variant="ghost" size="icon" className="w-4 h-4">
                          <MoreHorizontal className="w-4 h-4" />
                        </Button>
                      </CardHeader>
                      <CardContent>
                        <div className="text-3xl font-bold text-green-500">LKR 27,500</div>
                        <div className="flex items-center text-sm text-green-600 mt-2">
                          <TrendingUp className="w-4 h-4 mr-1" />
                          40% vs last month
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium text-gray-600">Wallet Balance</CardTitle>
                        <Button variant="ghost" size="icon" className="w-4 h-4">
                          <MoreHorizontal className="w-4 h-4" />
                        </Button>
                      </CardHeader>
                      <CardContent>
                        <div className="text-3xl font-bold text-green-500">LKR 35,500</div>
                        <div className="text-sm text-gray-500 mt-2">Last updated on August</div>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Booking Calendar */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-xl font-semibold">Booking Calendar</CardTitle>
                    </CardHeader>
                    <CardContent>
                      {/* Week Days */}
                      <div className="flex gap-2 mb-6">
                        {weekDays.map((day) => (
                          <div
                            key={day.date}
                            className={`flex flex-col items-center p-3 rounded-lg min-w-[80px] ${
                              day.active ? "bg-green-500 text-white" : "bg-gray-100 text-gray-700"
                            }`}
                          >
                            <span className="text-xs font-medium">{day.day}</span>
                            <span className="text-lg font-bold">{day.date}</span>
                          </div>
                        ))}
                      </div>

                      {/* Morning Slots */}
                      <div className="mb-8">
                        <div className="flex items-center gap-2 mb-4">
                          <Sun className="w-5 h-5 text-yellow-500" />
                          <h3 className="text-lg font-semibold">Morning Slots</h3>
                        </div>
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
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
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
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
                </>
              )}
              {currentPage === "bookings" && <BookingsPage />}
              {currentPage === "profile" && <ProfilePage />}
            </main>
          </div>
        </SidebarInset>
      </div>
    </SidebarProvider>
  )
}
