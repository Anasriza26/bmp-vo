import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const BookingSidebar = () => (
  <Card className="shadow-lg">
    <CardContent className="p-6">
      <div className="text-center mb-6">
        <div className="text-3xl font-bold text-green-600 mb-2">$25/hour</div>
        <Badge variant="secondary" className="bg-green-100 text-green-800">Available Today</Badge>
      </div>
      <div className="space-y-4 mb-6">
        {/* Date */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Select Date</label>
          <input type="date" className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-green-500" />
        </div>
        {/* Time */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Select Time</label>
          <select className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-green-500">
            <option>9:00 AM - 10:00 AM</option>
            {/* Add more options */}
          </select>
        </div>
        {/* Duration */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Duration (hours)</label>
          <select className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-green-500">
            <option>1 hour</option>
          </select>
        </div>
      </div>
      <Button className="w-full bg-green-600 text-white py-3 text-lg">Book Slots</Button>
      <p className="mt-4 text-xs text-center text-gray-500">Free cancellation up to 2 hours before</p>
    </CardContent>
  </Card>
);

export default BookingSidebar;
