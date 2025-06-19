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
      <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
        <Calendar className="w-5 h-5" />
        Select your date
      </h3>
      <div className="grid grid-cols-4 gap-3">
        <button
          onClick={() => setSelectedDate(22)}
          className={`p-3 rounded-xl border-2 col-span-2 ${
            selectedDate === 22
              ? "border-green-500 bg-green-500 text-white"
              : "border-gray-200 bg-white text-gray-600 hover:border-gray-300"
          }`}
        >
          <div className="text-xs font-medium mb-1">TODAY</div>
          <div className="text-2xl font-bold">22</div>
        </button>
        {dates.map((date) => (
          <button
            key={date.date}
            onClick={() => setSelectedDate(date.date)}
            className={`p-3 rounded-xl border-2 ${
              selectedDate === date.date
                ? "border-green-500 bg-green-50 text-green-700"
                : "border-gray-200 bg-white text-gray-600 hover:border-gray-300"
            }`}
          >
            <div className="text-xs font-medium mb-1">{date.day}</div>
            <div className="text-lg font-bold">{date.date}</div>
          </button>
        ))}
      </div>
    </div>
  );
}
