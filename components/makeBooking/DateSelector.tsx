import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface DateSelectorProps {
  selectedDate: string;
  onDateSelect: (date: string) => void;
}

const DateSelector: React.FC<DateSelectorProps> = ({ selectedDate, onDateSelect }) => {
  const dates = [
    { day: 'TODAY', date: '22', dayName: 'TUE' },
    { day: 'SAT', date: '23', dayName: 'SAT' },
    { day: 'SUN', date: '24', dayName: 'SUN' },
    { day: 'MON', date: '25', dayName: 'MON' },
    { day: 'TUE', date: '26', dayName: 'TUE' },
    { day: 'WED', date: '27', dayName: 'WED' },
    { day: 'THU', date: '28', dayName: 'THU' },
    { day: 'FRI', date: '29', dayName: 'FRI' },
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-gray-900">Select Date</h2>
        <div className="flex items-center gap-2">
          <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
            <ChevronLeft className="w-4 h-4 text-gray-600" />
          </button>
          <span className="text-sm font-medium text-gray-700 px-3">March 2024</span>
          <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
            <ChevronRight className="w-4 h-4 text-gray-600" />
          </button>
        </div>
      </div>
      <div className="grid grid-cols-8 gap-3">
        {dates.map((dateItem) => (
          <button
            key={dateItem.date}
            onClick={() => onDateSelect(dateItem.date)}
            className={`p-4 rounded-xl text-center transition-all duration-200 hover:scale-105 ${
              selectedDate === dateItem.date
                ? 'bg-green-500 text-white shadow-lg shadow-green-500/25'
                : 'bg-gray-50 hover:bg-gray-100 text-gray-700'
            }`}
          >
            <div className="text-xs font-medium mb-1">
              {dateItem.day === 'TODAY' ? 'TODAY' : dateItem.dayName}
            </div>
            <div className="text-xl font-bold">{dateItem.date}</div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default DateSelector;