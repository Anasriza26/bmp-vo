import React from "react";
import { Star, MapPin } from "lucide-react";

interface BookingHeaderProps {
  facilityName: string;
  location: string;
  rating: number;
  reviews: number;
}

const BookingHeader: React.FC<BookingHeaderProps> = ({
  facilityName,
  location,
  rating,
  reviews,
}) => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 sm:p-6 mb-6 sm:mb-8">
      <div className="flex flex-col gap-4">
        {/* Top Section: Name and Rating */}
        <div className="flex w-full justify-between items-center">
          <h1 className="text-lg sm:text-2xl font-semibold text-green-600">
            {facilityName}
          </h1>
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
            <span className="font-medium text-gray-900 text-sm sm:text-base">
              {rating}
            </span>
          </div>
        </div>

        {/* Location */}
        <div className="flex items-center gap-1">
          <MapPin className="w-4 h-4 text-gray-500" />
          <span className="text-gray-600 text-sm sm:text-base">
            {location}
          </span>
        </div>
      </div>
    </div>
  );
};

export default BookingHeader;
