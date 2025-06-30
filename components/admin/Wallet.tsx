"use client";
import { useState } from "react";
import CommonHeader from "../common/CommonHeader";
import CustomTable from "@/components/admin/admin-helper/Table";
import {
  CreditCard,
  DollarSign,
  FileText,
  BadgeCheck,
  Eye,
  Edit,
  Trash2,
  Search,
  Calendar,
  Filter,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "../ui/input";

// icon: FileText,
const Wallet = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const headers = [
    { label: "Name", className: "" },
    { label: "Total Amount", className: "" },
    { label: "Blocked Amount", className: "" },
    { label: "Balance", className: "" },
  ];

  const rows = [
    {
      cells: [
        { content: "INV001" },
        { content: "Paid", className: "text-green-600 font-medium" },
        { content: "Credit Card" },
        { content: "$250.00", className: "text-right" },
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
      <CommonHeader
        title="Wallet"
        subtitle="Track, manage and forecast your wallet dashboard."
      />

      <div className="flex-1 w-full p-6">
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

        <CustomTable
          //   caption="A list of your recent invoices."
          headers={headers}
          rows={rows}
          //   footerLabel="Total"
          //   footerAmount="$750.00"
        />
      </div>
    </>
  );
};

export default Wallet;
