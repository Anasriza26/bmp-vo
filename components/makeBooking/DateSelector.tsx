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
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 sm:p-6 mb-8">
      <div className="md:overflow-visible overflow-x-auto pb-2 -mx-4 px-4 md:mx-0 md:px-0">
        <div className="flex md:grid md:grid-cols-8 gap-2 md:gap-3">
          {dates.map((dateItem) => (
            <button
              key={dateItem.dateISO}
              onClick={() => onDateSelect(dateItem.dateISO)}
              className={`min-w-[64px] md:min-w-0 flex-shrink-0 p-3 md:p-4 rounded-xl text-center transition-all duration-200 hover:scale-105 ${
                selectedDate === dateItem.dateISO
                  ? 'bg-green-500 text-white shadow-lg shadow-green-500/25'
                  : 'bg-gray-50 hover:bg-gray-100 text-gray-800'
              }`}
            >
              <div className="text-xs font-medium mb-1">
                {dateItem.isToday ? 'Today' : dateItem.dayName}
              </div>
              <div className="text-lg md:text-xl font-semibold">{dateItem.day}</div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DateSelector;
