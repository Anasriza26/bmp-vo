import React from 'react';

interface DateSelectorProps {
  selectedDate: string;
  onDateSelect: (date: string) => void;
}

const DateSelector: React.FC<DateSelectorProps> = ({ selectedDate, onDateSelect }) => {
  const currentDateISO = new Date().toISOString().split('T')[0];

  const dates = Array.from({ length: 8 }, (_, i) => {
    const date = new Date();
    date.setDate(date.getDate() + i);

    const dateISO = date.toISOString().split('T')[0]; // Full date in YYYY-MM-DD
    const dayName = date.toLocaleDateString('en-US', { weekday: 'short' });
    const day = dateISO.split('-')[2]; // Day part (e.g., "25")

    return {
      dateISO,
      day,
      dayName,
      isToday: dateISO === currentDateISO,
    };
  });

  return (
    <div className="bg-white p-2 sm:p-6">
      <div className="">
        <div className="grid md:grid-cols-8 gap-1 md:gap-3 grid-cols-8">
          {dates.map((dateItem) => (
            <button
              key={dateItem.dateISO}
              onClick={() => onDateSelect(dateItem.dateISO)}
              className={`p-2 md:p-4 rounded-sm text-center justify-center ${
                selectedDate === dateItem.dateISO
                  ? 'bg-green-500 text-white'
                  : 'bg-white text-gray-800'
              }`}
            >
              <div className="text-[8px] md:text-sm font-semibold mb-1">
                {dateItem.isToday ? 'Today' : dateItem.dayName}
              </div>
              <div className="text-xs md:text-sm font-semibold mb-1">{dateItem.day}</div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DateSelector;
