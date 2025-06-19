import { Clock } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function TimeSelector({ startTime, setStartTime, endTime, setEndTime }: any) {
  return (
    <div>
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Select time</h3>
      <div className="space-y-4">
        {["Start", "End"].map((label, i) => (
          <div key={label}>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              {label} time
            </label>
            <Select
              value={i === 0 ? startTime : endTime}
              onValueChange={i === 0 ? setStartTime : setEndTime}
            >
              <SelectTrigger className="w-full h-12 bg-green-500 text-white border-green-500 hover:bg-green-600">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <SelectValue />
                </div>
              </SelectTrigger>
              <SelectContent>
                {["06:00 PM", "07:00 PM", "08:00 PM", "09:00 PM", "10:00 PM", "11:00 PM", "12:00 AM"].map(
                  (time) => (
                    <SelectItem key={time} value={time}>
                      {time}
                    </SelectItem>
                  )
                )}
              </SelectContent>
            </Select>
          </div>
        ))}
      </div>
    </div>
  );
}
