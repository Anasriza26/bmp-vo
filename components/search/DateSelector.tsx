import { CalendarIcon } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Button } from "../ui/button";
import { Calendar } from "../ui/calendar";

// Generate dates dynamically for the next 7 days
const dates = Array.from({ length: 7 }, (_, i) => {
  const date = new Date();
  date.setDate(date.getDate() + i);
  return {
    day: date.toLocaleDateString('en-US', { weekday: 'short' }),
    date: date.getDate(),
    fullDate: date.toISOString().split('T')[0],
  };
});

export default function DateSelector({ selectedDate, setSelectedDate }: any) {
  return (
    <div className="space-y-4">
      {/* Header with text and calendar icon on same line */}
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-gray-900">
          Select your date
        </h3>
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant="ghost"
              data-empty={!selectedDate}
              className="data-[empty=true]:text-muted-foreground justify-start text-left font-normal"
            >
              <CalendarIcon />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0">
            <Calendar
              mode="single"
              selected={selectedDate}
              onSelect={setSelectedDate}
              disabled={(date) =>
                date < new Date(new Date().setHours(0, 0, 0, 0))
              }
            />
          </PopoverContent>
        </Popover>
      </div>

      {/* Date selector horizontally scrollable */}
      <div className="flex gap-2 overflow-x-auto scrollbar-hide w-full">
        {dates.map((date) => (
          <button
            key={date.fullDate}
            onClick={() => setSelectedDate(date.fullDate)}
            className={`min-w-[70px] sm:min-w-[80px] md:min-w-[90px] 
              border rounded-md px-2 py-3 flex flex-col items-center
              ${
                selectedDate === date.fullDate
                  ? "border-green-500 bg-green-500 text-white"
                  : "border-gray-200 bg-white text-gray-600 hover:border-gray-300"
              }`}
          >
            <div className="text-xs font-semibold sm:text-sm">
              {date.day}
            </div>
            <div className="text-xs font-semibold sm:text-base">
              {date.date}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
