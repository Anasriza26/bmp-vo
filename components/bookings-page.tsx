"use client"

import { useState } from "react"
import { Search, Calendar, Filter, ChevronLeft, ChevronRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const bookingsData = [
  {
    id: 1,
    date: "Jan 6, 2022",
    status: "Paid",
    customer: { name: "Olivia Rhye", phone: "0774338424" },
    timeSlot: "08:00 AM",
    amount: "3500.00",
  },
  {
    id: 2,
    date: "Jan 6, 2022",
    status: "Paid",
    customer: { name: "Phoenix Baker", phone: "0774338424" },
    timeSlot: "08:00 AM",
    amount: "3500.00",
  },
  {
    id: 3,
    date: "Jan 6, 2022",
    status: "Paid",
    customer: { name: "Lana Steiner", phone: "0774338424" },
    timeSlot: "08:00 AM",
    amount: "3500.00",
  },
  {
    id: 4,
    date: "Jan 5, 2022",
    status: "Paid",
    customer: { name: "Demi Wilkinson", phone: "0774338424" },
    timeSlot: "08:00 AM",
    amount: "3500.00",
  },
  {
    id: 5,
    date: "Jan 5, 2022",
    status: "Refunded",
    customer: { name: "Candice Wu", phone: "0774338424" },
    timeSlot: "08:00 AM",
    amount: "3500.00",
  },
  {
    id: 6,
    date: "Jan 5, 2022",
    status: "Paid",
    customer: { name: "Natali Craig", phone: "0774338424" },
    timeSlot: "08:00 AM",
    amount: "3500.00",
  },
  {
    id: 7,
    date: "Jan 4, 2022",
    status: "Cancelled",
    customer: { name: "Drew Cano", phone: "0774338424" },
    timeSlot: "08:00 AM",
    amount: "3500.00",
  },
  {
    id: 8,
    date: "Jan 3, 2022",
    status: "Paid",
    customer: { name: "Orlando Diggs", phone: "0774338424" },
    timeSlot: "08:00 AM",
    amount: "3500.00",
  },
]

const StatusBadge = ({ status }: { status: string }) => {
  const getStatusStyles = (status: string) => {
    switch (status) {
      case "Paid":
        return "bg-green-100 text-green-700 border-green-200"
      case "Refunded":
        return "bg-gray-100 text-gray-700 border-gray-200"
      case "Cancelled":
        return "bg-red-100 text-red-700 border-red-200"
      default:
        return "bg-gray-100 text-gray-700 border-gray-200"
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Paid":
        return "✓"
      case "Refunded":
        return "↩"
      case "Cancelled":
        return "✕"
      default:
        return ""
    }
  }

  return (
    <span
      className={`inline-flex items-center gap-1 px-2 py-1 rounded-md text-xs font-medium border ${getStatusStyles(
        status,
      )}`}
    >
      <span>{getStatusIcon(status)}</span>
      {status}
    </span>
  )
}

export function BookingsPage() {
  const [currentPage, setCurrentPage] = useState(1)
  const [searchTerm, setSearchTerm] = useState("")

  const totalPages = 10

  return (
    <div className="flex flex-col">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-6 py-4">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">Manage Bookings</h1>
          <p className="text-gray-600 mt-1">Track, manage and forecast your bookings.</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 p-6">
        {/* Filters and Search */}
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input
              placeholder="Search booking"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <div className="flex gap-2">
            <Button variant="outline" className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              Jan 6, 2022 – Jan 13, 2022
            </Button>
            <Button variant="outline" className="flex items-center gap-2">
              <Filter className="w-4 h-4" />
              Filters
            </Button>
          </div>
        </div>

        {/* Bookings Table */}
        <Card>
          <CardContent className="p-0">
            <Table>
              <TableHeader>
                <TableRow className="border-b border-gray-200">
                  <TableHead className="text-gray-600 font-medium">Date</TableHead>
                  <TableHead className="text-gray-600 font-medium">Status</TableHead>
                  <TableHead className="text-gray-600 font-medium">Customer</TableHead>
                  <TableHead className="text-gray-600 font-medium">Time Slot</TableHead>
                  <TableHead className="text-gray-600 font-medium">Amount</TableHead>
                  <TableHead className="text-gray-600 font-medium"></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {bookingsData.map((booking) => (
                  <TableRow key={booking.id} className="border-b border-gray-100">
                    <TableCell className="font-medium text-gray-900">{booking.date}</TableCell>
                    <TableCell>
                      <StatusBadge status={booking.status} />
                    </TableCell>
                    <TableCell>
                      <div>
                        <div className="font-medium text-gray-900">{booking.customer.name}</div>
                        <div className="text-sm text-gray-500">{booking.customer.phone}</div>
                      </div>
                    </TableCell>
                    <TableCell className="text-gray-900">{booking.timeSlot}</TableCell>
                    <TableCell className="text-gray-900">{booking.amount}</TableCell>
                    <TableCell>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm" className="text-gray-600 hover:text-gray-900">
                          Reschedule
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          className="text-red-600 hover:text-red-700 border-red-200 hover:border-red-300"
                        >
                          Cancel
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* Pagination */}
        <div className="flex items-center justify-between mt-6">
          <Button
            variant="outline"
            className="flex items-center gap-2"
            disabled={currentPage === 1}
            onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
          >
            <ChevronLeft className="w-4 h-4" />
            Previous
          </Button>

          <div className="flex items-center gap-1">
            {[1, 2, 3, "...", 8, 9, 10].map((page, index) => (
              <Button
                key={index}
                variant={currentPage === page ? "default" : "ghost"}
                size="sm"
                className={`w-8 h-8 p-0 ${
                  currentPage === page
                    ? "bg-green-500 hover:bg-green-600 text-white"
                    : "text-gray-600 hover:text-gray-900"
                }`}
                onClick={() => typeof page === "number" && setCurrentPage(page)}
                disabled={page === "..."}
              >
                {page}
              </Button>
            ))}
          </div>

          <Button
            variant="outline"
            className="flex items-center gap-2"
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
          >
            Next
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>
      </main>
    </div>
  )
}
