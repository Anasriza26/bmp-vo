import React from 'react';

interface TimeSlot {
  time: string;
  period: string;
  available: boolean;
  selected: boolean;
}

interface TimeSlotGridProps {
  selectedSlots: string[];
  onSlotSelect: (slot: string) => void;
}

const TimeSlotGrid: React.FC<TimeSlotGridProps> = ({ selectedSlots, onSlotSelect }) => {
  const timeSlots: TimeSlot[] = [
    { time: '6:00', period: 'AM', available: true, selected: false },
    { time: '7:00', period: 'AM', available: true, selected: false },
    { time: '8:00', period: 'AM', available: true, selected: false },
    { time: '9:00', period: 'AM', available: true, selected: false },
    { time: '10:00', period: 'AM', available: true, selected: false },
    { time: '11:00', period: 'AM', available: true, selected: false },
    { time: '12:00', period: 'PM', available: true, selected: false },
    { time: '1:00', period: 'PM', available: true, selected: false },
    { time: '2:00', period: 'PM', available: true, selected: false },
    { time: '3:00', period: 'PM', available: true, selected: false },
    { time: '4:00', period: 'PM', available: false, selected: false },
    { time: '5:00', period: 'PM', available: true, selected: false },
    { time: '6:00', period: 'PM', available: true, selected: false },
    { time: '7:00', period: 'PM', available: true, selected: false },
    { time: '8:00', period: 'PM', available: true, selected: false },
    { time: '9:00', period: 'PM', available: true, selected: false },
    { time: '10:00', period: 'PM', available: true, selected: false },
    { time: '11:00', period: 'PM', available: true, selected: false },
  ];

  const getSlotStatus = (slot: TimeSlot) => {
    const slotKey = `${slot.time} ${slot.period}`;
    if (!slot.available) return 'unavailable';
    if (selectedSlots.includes(slotKey) || slot.selected) return 'selected';
    return 'available';
  };

  const getSlotStyles = (status: string) => {
    const baseStyles = 'p-2 md:p-3 lg:p-4 rounded-lg md:rounded-xl border-2 text-center transition-all duration-200';
    
    switch (status) {
      case 'selected':
        return `${baseStyles} bg-green-500 text-white border-green-500 shadow-lg shadow-green-500/25 scale-105`;
      case 'unavailable':
        return `${baseStyles} bg-gray-100 text-gray-400 border-gray-200 cursor-not-allowed`;
      default:
        return `${baseStyles} bg-white text-gray-700 border-gray-200 hover:border-green-300 hover:bg-green-50 hover:scale-105`;
    }
  };

  return (
    <div className="bg-white rounded-lg md:rounded-xl shadow-sm border border-gray-100 p-4 md:p-6 mb-6 md:mb-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 md:mb-6 gap-3">
        <h2 className="text-lg md:text-xl font-semibold text-gray-900">Available Time Slots</h2>
        <div className="flex items-center gap-2 md:gap-4 text-xs md:text-sm">
          <div className="flex items-center gap-1 md:gap-2">
            <div className="w-2 h-2 md:w-3 md:h-3 bg-green-500 rounded-full"></div>
            <span className="text-gray-600">Selected</span>
          </div>
          <div className="flex items-center gap-1 md:gap-2">
            <div className="w-2 h-2 md:w-3 md:h-3 bg-gray-200 rounded-full"></div>
            <span className="text-gray-600">Unavailable</span>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-2 md:gap-3">
        {timeSlots.map((slot) => {
          const slotKey = `${slot.time} ${slot.period}`;
          const status = getSlotStatus(slot);
          
          return (
            <button
              key={slotKey}
              onClick={() => status === 'available' || status === 'selected' ? onSlotSelect(slotKey) : undefined}
              disabled={status === 'unavailable'}
              className={`${getSlotStyles(status)}`}
            >
              <div className="font-medium text-sm md:font-semibold md:text-base">{slot.time}</div>
              <div className="text-xs opacity-75">{slot.period}</div>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default TimeSlotGrid;