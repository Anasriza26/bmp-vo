"use client";

import { useState } from "react";
import {
  Search,
  Calendar,
  Filter,
  ChevronLeft,
  ChevronRight,
  Trash2,
  Edit,
  Eye,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import CommonHeader from "./common/CommonHeader";
import CustomTable from "./admin/admin-helper/Table";

export function BookingsPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");

  const headers = [
    { label: "Date", className: "" },
    { label: "Status", className: "" },
    { label: "Customer", className: "" },
    { label: "Time slot", className: "" },
    { label: "Amount", className: "" },
  ];

  const rows = [
    {
      cells: [
        { content: "2025.09.21" }, // Name
        { content: "Paid" }, // Wallet
        { content: "rizanas  0754121698", className: "" }, // Amount
        { content: "12:00" },
        { content: "$250" }, 
      ],
      actions: (
        <div className="flex justify-end gap-2">
          <Button variant="outline" size="sm">
            <Edit className="w-4 h-4 mr-1" />
            Edit
          </Button>
          <Button variant="destructive" size="sm">
            <Trash2 className="w-4 h-4 mr-1" />
            Delete
          </Button>
        </div>
      ),
    },
  ];

  const totalPages = 10;

  return (
    <div className="flex flex-col w-full py-4 px-4 max-w-[100vw] overflow-x-hidden md:overflow-hidden">
      {/* Header */}
      <CommonHeader
        title="Manage Bookings"
        subtitle="Track, manage and forecast your bookings."
      />

      {/* Main Content */}
      <main className="flex-1 w-full max-w-[100vw] overflow-x-hidden">
        {/* Filters and Search */}
        <div className="flex flex-col sm:flex-row gap-4 my-4 w-full">
          <div className="relative w-full sm:flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input
              placeholder="Search booking"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 w-full"
            />
          </div>
          <div className="flex gap-1 w-full sm:w-auto">
            <Button
              variant="outline"
              className="flex items-center w-full sm:w-auto"
            >
              <Calendar className="w-4 h-4 mr-2" />
              <span className="whitespace-nowrap">
                Jan 6, 2022 – Jan 13, 2022
              </span>
            </Button>
            <Button
              variant="outline"
              className="flex items-center w-full sm:w-auto"
            >
              <Filter className="w-4 h-4 mr-2" />
              Filters
            </Button>
          </div>
        </div>

        {/* Bookings Table */}
        <div className="w-full rounded-md border overflow-hidden">
          <div className="w-full overflow-x-auto">
            <CustomTable headers={headers} rows={rows} />
          </div>
        </div>

        {/* Pagination */}
        <div className="flex justify-between items-center mt-6 w-full">
          <Button
            variant="outline"
            className="flex items-center gap-2"
            disabled={currentPage === 1}
            onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
          >
            <ChevronLeft className="w-4 h-4" />
            <span className="hidden sm:inline">Previous</span>
          </Button>

          <div className="flex items-center gap-1 mx-2 overflow-x-auto py-2">
            {[1, 2, 3, "...", 8, 9, 10].map((page, index) => (
              <Button
                key={index}
                variant={currentPage === page ? "default" : "ghost"}
                size="sm"
                className={`min-w-[32px] h-8 p-0 ${
                  currentPage === page
                    ? "bg-green-500 hover:bg-green-600 text-white"
                    : "text-gray-600 hover:text-gray-900"
                }`}
                onClick={() =>
                  typeof page === "number" && setCurrentPage(page)
                }
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
            onClick={() =>
              setCurrentPage(Math.min(totalPages, currentPage + 1))
            }
          >
            <span className="hidden sm:inline">Next</span>
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>
      </main>
    </div>
  );
}