"use client";

import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

type HeaderItem = {
  label?: string;
  icon?: LucideIcon;
  className?: string;
};

type RowItem = {
  cells: Array<{
    content?: string | React.ReactNode;
    icon?: LucideIcon;
    className?: string;
  }>;
  actions?: React.ReactNode; // For buttons or other components in row
};

interface CustomTableProps {
  caption?: string;
  headers: HeaderItem[];
  rows: RowItem[];
  footerLabel?: string;
  footerAmount?: string;
}

const CustomTable: React.FC<CustomTableProps> = ({
  caption,
  headers,
  rows,
  footerLabel,
  footerAmount,
}) => {
  return (
    <>
      <div className="overflow-x-auto rounded-md border">
        <Table className=" border-b border-gray-100">
          {/* {caption && <TableCaption>{caption}</TableCaption>} */}

          <TableHeader className="border-b border-gray-200">
            <TableRow className="border-b border-gray-200">
              {headers.map((header: HeaderItem, index: number) => (
                <TableHead
                  key={index}
                  className={cn(header.className, "text-sm font-semibold")}
                >
                  <div className="flex items-center gap-1">
                    {header.icon && <header.icon className="w-4 h-4" />}
                    {header.label || ""}
                  </div>
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>

          <TableBody>
            {rows.map((row: RowItem, rowIndex: number) => (
              <TableRow key={rowIndex}>
                {row.cells.map((cell, cellIndex) => (
                  <TableCell
                    key={cellIndex}
                    className={cn(cell.className, "align-middle")}
                  >
                    <div className="flex items-center gap-1">
                      {cell.icon && <cell.icon className="w-4 h-4" />}
                      {cell.content || ""}
                    </div>
                  </TableCell>
                ))}
                {row.actions && (
                  <TableCell className="text-right">{row.actions}</TableCell>
                )}
              </TableRow>
            ))}
          </TableBody>

          {footerLabel && footerAmount && (
            <TableFooter>
              <TableRow>
                <TableCell
                  colSpan={headers.length - 1}
                  className="font-semibold"
                >
                  {footerLabel}
                </TableCell>
                <TableCell className="text-right font-bold">
                  {footerAmount}
                </TableCell>
              </TableRow>
            </TableFooter>
          )}
        </Table>
      </div>
    </>
  );
};

export default CustomTable;
