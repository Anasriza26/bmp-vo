import { Card, CardContent } from "@/components/ui/card";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";

// Dummy StatusBadge component, replace with your actual implementation
const StatusBadge: React.FC<{ status: string }> = ({ status }) => (
  <span className="px-2 py-1 rounded text-xs font-semibold bg-gray-100 text-gray-700">
    {status}
  </span>
);

interface Column {
  label: string;
  key: string;
}

interface CommonTableProps {
  bookingsData: any[]; // make flexible for any data shape
  columns: Column[];
}

const CommonTable: React.FC<CommonTableProps> = ({ bookingsData, columns }) => {
  return (
    <Card>
      <CardContent className="p-0 w-full">
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
            {bookingsData.map((row, rowIndex) => (
              <TableRow key={row.id || rowIndex} className="border-b border-gray-100">
                {columns.map((col, colIndex) => (
                  <TableCell key={colIndex} className="text-gray-900">
                    {/* Render based on key type */}
                    {col.key === "status" ? (
                      <StatusBadge status={row[col.key]} />
                    ) : col.key === "customer" && typeof row[col.key] === "object" ? (
                      <div>
                        <div className="font-medium text-gray-900">{row[col.key]?.name}</div>
                        <div className="text-sm text-gray-500">{row[col.key]?.phone}</div>
                      </div>
                    ) : col.key === "actions" ? (
                      <div className="flex gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          className="text-#344054 hover:text-blue-900"
                        >
                          Edit
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          className="text-red-600 hover:text-red-700 border-red-200 hover:border-red-300"
                        >
                          Delete
                        </Button>
                      </div>
                    ) : col.key === "buttons" ? (
                      <div className="flex gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          className="text-gray-600 hover:text-gray-900"
                        >
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
                    ) : (
                      row[col.key] ?? "-"
                    )}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default CommonTable;
