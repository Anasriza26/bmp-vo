import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";

interface WalletEntry {
  id: string | number;
  date: string;
  status: string;
  type: string;
  amount: string;
}

interface Column {
  label: string;
  key: keyof WalletEntry | string;
}

interface WalletTableProps {
  data: WalletEntry[];
  columns: Column[];
  className?: string;
}

// Reusable badge for status display
const StatusBadge: React.FC<{ status: string }> = ({ status }) => {
  const colorMap: Record<string, string> = {
    Paid: "bg-green-100 text-green-600",
    Refund: "bg-yellow-100 text-yellow-600",
    Rejected: "bg-red-100 text-red-600",
  };

  const color = colorMap[status] || "bg-gray-100 text-gray-700";

  return (
    <span className={`px-2 py-1 rounded text-xs font-semibold ${color}`}>
      {status}
    </span>
  );
};

const WalletTable: React.FC<WalletTableProps> = ({ data, columns, className }) => {
  return (
    <Card className={className}>
      <CardContent className="p-0">
        <Table>
          <TableHeader>
            <TableRow className="border-b border-gray-200">
              {columns.map((col, idx) => (
                <TableHead key={idx} className="text-gray-600 font-medium">
                  {col.label}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((entry) => (
              <TableRow key={entry.id} className="border-b border-gray-100">
                <TableCell className="text-gray-900 font-medium">{entry.date}</TableCell>
                <TableCell>
                  <StatusBadge status={entry.status} />
                </TableCell>
                <TableCell className="text-gray-900">{entry.type}</TableCell>
                <TableCell className="text-gray-900">{entry.amount}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default WalletTable;
