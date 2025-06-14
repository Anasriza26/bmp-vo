"use client"

import React, { useState } from "react";
import CommonHeader from "./common/CommonHeader";
import { Button } from "./ui/button";
import CommonCard from "./common/CommonCard";
import WalletTable from "./common/WalletTable";
import { ChevronLeft, ChevronRight } from "lucide-react";

const columns = [
  { label: "Date", key: "date" },
  { label: "Status", key: "status" },
  { label: "Type", key: "type" },
  { label: "Amount", key: "amount" },
];

const bookingsData = [
  {
    id: 1,
    date: "Jan 6, 2022",
    status: "Paid",
    type: "Earn",
    amount: "3000",
  },
  {
    id: 2,
    date: "Jan 6, 2022",
    status: "Paid",
    type: "Refund",
    amount: "3000",
  },
  {
    id: 3,
    date: "Jan 6, 2022",
    status: "Refund",
    type: "Rejected",
    amount: "3000",
  },
];




export const WalletPage = () => {
    const [currentPage, setCurrentPage] = useState(1)
      const [searchTerm, setSearchTerm] = useState("")
    
      const totalPages = 10
  return (
    <>
      <div className="flex flex-col">
        <div className="flex items-center justify-between w-full">
          <CommonHeader
            title="Manage Wallet"
            subtitle="Define when your facility is open for bookings and set your base pricing structure."
          />

          <Button className=" ml-64 w-[230px] h-[44px] bg-white border-2 border-green-500 text-green-500 hover:bg-none font-semibold">
            Request Withdrawal
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 ml-6 mt-6">
          <CommonCard
            title="Total Earnings"
            value="LKR 58,500"
            valueColor="text-green-500"
          />
          <CommonCard title="Total Balance" value="LKR 24,500" />
          <CommonCard
            title="Blocked Amount"
            titleColor="text-red-500"
            value="LKR 34,500"
            valueColor="text-red-500"
          />
        </div>

        <div className="flex gap-x-4 ml-6">
          <Button className="w-[150px] h-[44px] bg-white border-2 border-#ffffff text-[#344054] hover:bg-none font-semibold">
            Earnings
          </Button>

          <Button className="w-[150px] h-[44px] bg-white border-2 border-#ffffff text-[#344054] hover:bg-none font-semibold">
            Withdrawals
          </Button>
        </div>

        <WalletTable data={bookingsData} columns={columns} className="mt-6 ml-6" />

         <div className="flex items-center justify-between mt-6 ml-6">
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
       


      </div>
    </>
  );
};
