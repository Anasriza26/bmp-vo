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
    { time: '12:00', period: 'PM', available: true, selected: false }
  ];

  const getSlotStatus = (slot: TimeSlot) => {
    const slotKey = `${slot.time} ${slot.period}`;
    if (!slot.available) return 'unavailable';
    if (selectedSlots.includes(slotKey) || slot.selected) return 'selected';
    return 'available';
  };

  const getSlotStyles = (status: string) => {
    const baseStyles = 'p-2 md:p-3 lg:p-4 rounded-md md:rounded-xl border-2 text-center';
    
    switch (status) {
      case 'selected':
        return `${baseStyles} bg-green-500 text-white border-primary`;
      case 'unavailable':
        return `${baseStyles} bg-gray-100 text-gray-400 border-gray-200 cursor-not-allowed`;
      default:
        return `${baseStyles} bg-white text-black border-primary`;
    }
  };

  return (
    <div className="bg-white rounded-md md:rounded-xl md:p-6 mb-2 md:mb-8 px-4">
      <div className="grid grid-cols-4 sm:grid-cols-4 md:grid-cols-6 gap-2 md:gap-3">
        {timeSlots.map((slot) => {
          const slotKey = `${slot.time} ${slot.period}`;
          const status = getSlotStatus(slot);
          
          return (
            <button
              key={slotKey}
              onClick={() =>
                status === "available" || status === "selected"
                  ? onSlotSelect(slotKey)
                  : undefined
              }
              disabled={status === "unavailable"}
              className={`${getSlotStyles(
                status
              )} flex text-center items-center justify-center w-full`}
            >
              <div className="font-semibold text-xs md:font-semibold md:text-base text-center">
                {slot.time}
              </div>
              <div className="text-xs md:text-base pl-[2px] font-semibold">
                {slot.period}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default TimeSlotGrid;