import React from 'react';
import { Star, MapPin, Clock, Users } from 'lucide-react';

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
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex-1 w-full">
          <h1 className="text-2xl sm:text-3xl font-bold text-green-600 mb-1 sm:mb-2">
            {facilityName}
          </h1>
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-3 sm:mb-4">
            <div className="flex items-center gap-1">
              <MapPin className="w-4 h-4 text-gray-500" />
              <span className="text-gray-600 text-sm sm:text-base">{location}</span>
            </div>
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 text-yellow-400 fill-current" />
              <span className="font-medium text-gray-900 text-sm sm:text-base">{rating}</span>
              <span className="text-gray-500 text-xs sm:text-sm">({reviews} reviews)</span>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-6 text-sm text-gray-600">
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>Open 6:00 AM - 12:00 AM</span>
            </div>
            <div className="flex items-center gap-1">
              <Users className="w-4 h-4" />
              <span>Up to 22 players</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingHeader;