import { Calendar } from "lucide-react";

const dates = [
  { day: "SAT", date: 23 },
  { day: "SUN", date: 24 },
  { day: "MON", date: 25 },
  { day: "TUE", date: 26 },
  { day: "WED", date: 27 },
  { day: "THU", date: 28 },
  { day: "FRI", date: 29 },
];

export default function DateSelector({ selectedDate, setSelectedDate }: any) {
  return (
    <div>
      <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center justify-between">
        Select your date
        <Calendar className="w-5 h-5 " />
      </h3>
      <div className="grid grid-cols-8 gap-3 sm:grid-cols-8 xs:grid-cols-3 xs:gap-2 ">
        <button
          onClick={() => setSelectedDate(22)}
          className={`p-3 rounded-md border-2  ${
            selectedDate === 22
              ? "border-green-500 bg-green-500 text-white"
              : "border-gray-200 bg-white text-gray-600 hover:border-gray-300"
          } xs:p-2`}
        >
          <div className="text-xs font-medium mb-1 xs:text-[8px] sm:text-[8px]">
            TODAY
          </div>
          <div className="text-xs font-medium xs:text-base sm:text-lg">22</div>
        </button>
        {dates.map((date) => (
          <button
            key={date.date}
            onClick={() => setSelectedDate(date.date)}
            className={`p-3 rounded-md border-2 ${
              selectedDate === date.date
                ? "border-green-500 bg-green-500 text-white"
                : "border-gray-200 bg-white text-gray-600 hover:border-gray-300"
            } xs:p-2`}
          >
            <div className="text-xs font-medium mb-1 xs:text-[8px]">
              {date.day}
            </div>
            <div className="text-xs font-semibold xs:text-base">{date.date}</div>
          </button>
        ))}
      </div>
    </div>
  );
}
