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
    { time: '11:00', period: 'AM', available: true, selected: true },
    { time: '12:00', period: 'PM', available: true, selected: false },
    { time: '1:00', period: 'PM', available: true, selected: false },
    { time: '2:00', period: 'PM', available: true, selected: false },
    { time: '3:00', period: 'PM', available: true, selected: false },
    { time: '4:00', period: 'PM', available: false, selected: false },
    { time: '5:00', period: 'PM', available: true, selected: true },
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
    switch (status) {
      case 'selected':
        return 'bg-green-500 text-white border-green-500 shadow-lg shadow-green-500/25 scale-105';
      case 'unavailable':
        return 'bg-gray-100 text-gray-400 border-gray-200 cursor-not-allowed';
      default:
        return 'bg-white text-gray-700 border-gray-200 hover:border-green-300 hover:bg-green-50 hover:scale-105';
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-gray-900">Available Time Slots</h2>
        <div className="flex items-center gap-4 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <span className="text-gray-600">Selected</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-gray-200 rounded-full"></div>
            <span className="text-gray-600">Unavailable</span>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-6 gap-3">
        {timeSlots.map((slot) => {
          const slotKey = `${slot.time} ${slot.period}`;
          const status = getSlotStatus(slot);
          
          return (
            <button
              key={slotKey}
              onClick={() => status === 'available' || status === 'selected' ? onSlotSelect(slotKey) : undefined}
              disabled={status === 'unavailable'}
              className={`p-4 rounded-xl border-2 text-center transition-all duration-200 ${getSlotStyles(status)}`}
            >
              <div className="font-semibold">{slot.time}</div>
              <div className="text-xs opacity-75">{slot.period}</div>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default TimeSlotGrid;