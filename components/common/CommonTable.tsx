import { Card, CardContent } from "@/components/ui/card";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { Button } from "@/components/ui/button"; // adjust the import based on your project

// Dummy StatusBadge component, replace with your actual implementation or import
const StatusBadge: React.FC<{ status: string }> = ({ status }) => (
  <span className="px-2 py-1 rounded text-xs font-semibold bg-gray-100 text-gray-700">
    {status}
  </span>
);

interface Customer {
  name: string;
  phone: string;
}

interface Booking {
  id: string;
  date: string;
  status: string;
  customer: Customer;
  timeSlot: string;
  amount: string;
}

interface BookingTableProps {
  bookingsData: Booking[];
}

const CommonTable: React.FC<BookingTableProps> = ({ bookingsData }) => {
  return (<>
  <Card>
      <CardContent className="p-0">
        <Table>
          <TableHeader>
            <TableRow className="border-b border-gray-200">
              <TableHead className="text-gray-600 font-medium">Date</TableHead>
              <TableHead className="text-gray-600 font-medium">Status</TableHead>
              <TableHead className="text-gray-600 font-medium">Customer</TableHead>
              <TableHead className="text-gray-600 font-medium">Time Slot</TableHead>
              <TableHead className="text-gray-600 font-medium">Amount</TableHead>
              <TableHead className="text-gray-600 font-medium"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {bookingsData.map((booking: Booking) => (
              <TableRow key={booking.id} className="border-b border-gray-100">
                <TableCell className="font-medium text-gray-900">{booking.date}</TableCell>
                <TableCell>
                  <StatusBadge status={booking.status} />
                </TableCell>
                <TableCell>
                  <div>
                    <div className="font-medium text-gray-900">{booking.customer.name}</div>
                    <div className="text-sm text-gray-500">{booking.customer.phone}</div>
                  </div>
                </TableCell>
                <TableCell className="text-gray-900">{booking.timeSlot}</TableCell>
                <TableCell className="text-gray-900">{booking.amount}</TableCell>
                <TableCell>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="text-gray-600 hover:text-gray-900">
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
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>

  </>
  )
}

export default CommonTable