import { CalendarIcon } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Button } from "../ui/button";
import { Calendar } from "../ui/calendar";

// Generate dates dynamically for the next 7 days (no past dates)
const dates = Array.from({ length: 7 }, (_, i) => {
  const date = new Date();
  date.setDate(date.getDate() + i);
  return {
    day: date.toLocaleDateString('en-US', { weekday: 'short' }),
    date: date.getDate(),
    fullDate: date.toISOString().split('T')[0], // ISO format
  };
});

export default function DateSelector({ selectedDate, setSelectedDate }: any) {
  return (
    <div>
      <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center justify-between">
        Select your date
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
              disabled={(date) => date < new Date(new Date().setHours(0, 0, 0, 0))}
            />
          </PopoverContent>
        </Popover>
      </h3>

      <div className="grid grid-cols-8 sm:grid-cols-8 xs:grid-cols-3 xs:gap-2 text-center justify-center items-center">
        {dates.map((date) => (
          <button
            key={date.fullDate}
            onClick={() => setSelectedDate(date.fullDate)}
            className={`p-3 rounded-md ${
              selectedDate === date.fullDate
                ? "border-green-500 bg-green-500 text-white"
                : "border-gray-200 bg-white text-gray-600 hover:border-gray-300"
            } xs:p-2`}
          >
            <div className="text-xs font-semibold lg:text-lg">{date.day}</div>
            <div className="text-xs font-semibold xs:text-lg">{date.date}</div>
          </button>
        ))}
      </div>
    </div>
  );
}
