"use client";
import React from "react";
import CommonHeader from "../common/CommonHeader";
import CustomTable from "@/components/admin/admin-helper/Table";
import { CreditCard, DollarSign, FileText, BadgeCheck, Eye, Edit, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";



// icon: FileText,
const Wallet = () => {
  const headers = [
    { label: "Name", className: "" },
    { label: "Total Amount", className: "" },
    { label: "Blocked Amount", className: "" },
    { label: "Balance",  className: "" },
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

      <div className="p-4">
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
