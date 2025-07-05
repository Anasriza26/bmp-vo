import React from "react";
import Link from "next/link";
import { Calendar, Clock, MapPin, DollarSign } from "lucide-react";

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
  pricePerHour,
}) => {
  const totalHours = selectedSlots.length;
  const totalPrice = totalHours * pricePerHour;
  const serviceFee = Math.round(totalPrice * 0.1);
  const finalTotal = totalPrice + serviceFee;

  return (
    <div className="bg-white rounded-xl p-4">
      {selectedSlots.length > 0 && (
        <>

        </>
      )}

      <button
        disabled={selectedSlots.length === 0}
        className={`w-full py-2 px-3 rounded-xl font-semibold text-white ${
          selectedSlots.length === 0
            ? "bg-gray-300 cursor-not-allowed"
            : "bg-primary"
        }`}
      >
        <Link href="/booking-overview">
          {selectedSlots.length === 0
            ? "Select Time Slots"
            : "Proceed to Checkout"}
        </Link>
      </button>
    </div>
  );
};

export default BookingSummary;
