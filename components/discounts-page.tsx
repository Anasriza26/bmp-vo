"use client";
import CommonHeader from "./common/CommonHeader";
import { Button } from "./ui/button";
import CommonTable from "./common/CommonTable";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const columns = [
  { label: "Start Date", key: "startDate" },
  { label: "End Date", key: "endDate" },
  { label: "Percentage", key: "percentage" },
  { label: "Code", key: "code" },
  { label: "Actions", key: "actions" },
];

const discountData = [
  {
    id: "1",
    startDate: "2025-06-01",
    endDate: "2025-06-30",
    percentage: "15",
    code: "Holiday 20",
  },
  {
    id: "2",
    startDate: "2025-07-01",
    endDate: "2025-07-15",
    percentage: "10",
    code: "Holiday20",
  },
];

export const DiscountPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10;

  return (
    <>
      <div className="flex flex-col">
        <div className="flex items-center justify-between w-full">
          <CommonHeader
            title="Manage Discounts"
            subtitle="Define when your facility is open for bookings and set your base pricing structure."
          />

          <Button className=" ml-64 w-[130px] h-[44px] bg-white border-2 border-green-500 text-green-500 hover:bg-none font-semibold">
            Create
          </Button>
        </div>

        <div className="flex gap-x-4 ml-6 mt-6">
          <Button className="w-[150px] h-[44px] bg-white border-2 border-#ffffff text-[#344054] hover:bg-none font-semibold">
            Date Based
          </Button>

          <Button className="w-[150px] h-[44px] bg-white border-2 border-#ffffff text-[#344054] hover:bg-none font-semibold">
            Time Based
          </Button>
        </div>

        <div className="mt-6 ml-6">
          <CommonTable bookingsData={discountData} columns={columns} />
        </div>

        <div className="ml-6 mt-1">
          <div className="flex items-center justify-between">
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
              Next
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};
