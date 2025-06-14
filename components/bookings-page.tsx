"use client"

import { useState } from "react"
import { Search, Calendar, Filter, ChevronLeft, ChevronRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import CommonTable from "./common/CommonTable"
import CommonHeader from "./common/CommonHeader"

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
  {
    id: 9,
    date: "Jan 4, 2022",
    status: "Paid",
    customer: { name: "Anas Riza", phone: "0754121698" },
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
      <CommonHeader
        title="Manage Bookings"
        subtitle="Track, manage and forecast your bookings."
      />

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
       <CommonTable bookingsData={bookingsData.map(b => ({ ...b, id: String(b.id) }))} />

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
