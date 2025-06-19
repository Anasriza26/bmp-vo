import React from 'react';
import { Calendar, Clock, MapPin, DollarSign } from 'lucide-react';

interface BookingSummaryProps {
  selectedDate: string;
  selectedSlots: string[];
  facilityName: string;
  location: string;
  pricePerHour: number;
}

const BookingSummary: React.FC<BookingSummaryProps> = ({
  selectedDate,
  selectedSlots,
  facilityName,
  location,
  pricePerHour
}) => {
  const totalHours = selectedSlots.length;
  const totalPrice = totalHours * pricePerHour;
  const serviceFee = Math.round(totalPrice * 0.1);
  const finalTotal = totalPrice + serviceFee;

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 sticky top-8">
      <h3 className="text-xl font-semibold text-gray-900 mb-6">Booking Summary</h3>
      
      <div className="space-y-4 mb-6">
        <div className="flex items-start gap-3">
          <MapPin className="w-5 h-5 text-gray-400 mt-0.5" />
          <div>
            <div className="font-medium text-gray-900">{facilityName}</div>
            <div className="text-sm text-gray-600">{location}</div>
          </div>
        </div>
        
        <div className="flex items-center gap-3">
          <Calendar className="w-5 h-5 text-gray-400" />
          <div className="text-gray-900">March {selectedDate}, 2024</div>
        </div>
        
        {selectedSlots.length > 0 && (
          <div className="flex items-start gap-3">
            <Clock className="w-5 h-5 text-gray-400 mt-0.5" />
            <div>
              <div className="text-gray-900 font-medium">Time Slots</div>
              <div className="text-sm text-gray-600">
                {selectedSlots.join(', ')}
              </div>
            </div>
          </div>
        )}
      </div>

      {selectedSlots.length > 0 && (
        <>
          <div className="border-t border-gray-100 pt-4 mb-4">
            <div className="space-y-2">
              <div className="flex justify-between text-gray-600">
                <span>{totalHours} hour{totalHours > 1 ? 's' : ''} × ${pricePerHour}</span>
                <span>${totalPrice}</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Service fee</span>
                <span>${serviceFee}</span>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-100 pt-4 mb-6">
            <div className="flex justify-between items-center">
              <span className="text-lg font-semibold text-gray-900">Total</span>
              <span className="text-2xl font-bold text-green-600">${finalTotal}</span>
            </div>
          </div>
        </>
      )}

      <button
        disabled={selectedSlots.length === 0}
        className={`w-full py-4 px-6 rounded-xl font-semibold text-white transition-all duration-200 ${
          selectedSlots.length === 0
            ? 'bg-gray-300 cursor-not-allowed'
            : 'bg-green-500 hover:bg-green-600 hover:shadow-lg hover:shadow-green-500/25 active:scale-95'
        }`}
      >
        {selectedSlots.length === 0 ? 'Select Time Slots' : 'Proceed to Checkout'}
      </button>
      
      <p className="text-xs text-gray-500 text-center mt-3">
        You won't be charged until your booking is confirmed
      </p>
    </div>
  );
};

export default BookingSummary;