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
  reviews 
}) => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-8">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <h1 className="text-3xl font-bold text-green-600 mb-2">{facilityName}</h1>
          <div className="flex items-center gap-4 mb-4">
            <div className="flex items-center gap-1">
              <MapPin className="w-4 h-4 text-gray-500" />
              <span className="text-gray-600">{location}</span>
            </div>
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 text-yellow-400 fill-current" />
              <span className="font-medium text-gray-900">{rating}</span>
              <span className="text-gray-500">({reviews} reviews)</span>
            </div>
          </div>
          <div className="flex items-center gap-6 text-sm text-gray-600">
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
        <div className="ml-8">
          <div className="text-right">
            <div className="text-2xl font-bold text-green-600">$25</div>
            <div className="text-sm text-gray-500">per hour</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingHeader;