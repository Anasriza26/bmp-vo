"use client";

import { Calendar, Edit, Eye, Filter, Search, Trash2 } from "lucide-react";
import CommonHeader from "../common/CommonHeader";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import React, { useState } from "react";
import CustomTable from "./admin-helper/Table";

export const AdminPayment = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const headers = [
    { label: "Name", className: "" },
    { label: "Amount", className: "" },
    { label: "Date", className: "" },
    { label: "Method", className: "" },
    { label: "Status", className: "" },
    { label: "Type", className: "" },
  ];

  const rows = [
    {
      cells: [
        { content: "Anas Riza" }, // Name
        { content: "$250.00", className: "text-right" }, // Amount
        { content: "2025-06-30" }, // Date
        { content: "Credit Card" }, // Method
        { content: "Paid", className: "text-green-600 font-medium" }, // Status
        { content: "Invoice", className: "text-gray-600" }, // Type
      ],
      actions: (
        <div className="flex justify-end gap-2">
          <Button variant="outline" size="sm">
            <Eye className="w-4 h-4" />
            View
          </Button>
          <Button variant="outline" size="sm">
            <Edit className="w-4 h-4" />
            Edit
          </Button>
          <Button variant="destructive" size="sm">
            <Trash2 className="w-4 h-4" />
            Delete
          </Button>
        </div>
      ),
    },
     {
      cells: [
        { content: "Ibrahim" }, // Name
        { content: "$250.00", className: "text-right" }, // Amount
        { content: "2025-06-30" }, // Date
        { content: "Credit Card" }, // Method
        { content: "Paid", className: "text-green-600 font-medium" }, // Status
        { content: "Invoice", className: "text-gray-600" }, // Type
      ],
      actions: (
        <div className="flex justify-end gap-2">
          <Button variant="outline" size="sm">
            <Eye className="w-4 h-4" />
            View
          </Button>
          <Button variant="outline" size="sm">
            <Edit className="w-4 h-4" />
            Edit
          </Button>
          <Button variant="destructive" size="sm">
            <Trash2 className="w-4 h-4" />
            Delete
          </Button>
        </div>
      ),
    },
  ];

  return (
    <>
      <section className="CommonHeader">
        <CommonHeader
          title="Manage Payments"
          subtitle="Track, manage and forecast your payments."
        />
      </section>

      <div className="flex-1 w-full p-6">
        <section className="Search and filter">
          <div className="flex flex-col sm:flex-row gap-4 mb-6 w-full">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 hover:bg-white" />
              <Input
                placeholder="Search turf"
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
        </section>

        <section className="Custome Table">
          <CustomTable headers={headers} rows={rows} />
        </section>
      </div>
    </>
  );
};
