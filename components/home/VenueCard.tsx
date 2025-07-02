"use client";

import { MapPin, Star, Users } from "lucide-react";
import Link from "next/link";

interface Venue {
  id: number;
  name: string;
  location: string;
  rating: number;
  price: number;
  image: string;
}

const VenueCard = ({ venue }: { venue: Venue }) => (
  <div className="bg-white rounded-xl md:rounded-2xl shadow-md md:shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
    <div className="relative">
      <img
        src={venue.image}
        alt={venue.name}
        className="w-full h-40 sm:h-48 md:h-56 object-cover"
      />
    </div>
    <div className="p-4 sm:p-5 md:p-6">
      <div className="flex items-center justify-between mb-1 sm:mb-2">
        <h3 className="text-lg sm:text-xl font-semibold text-primary line-clamp-1">
          {venue.name}
        </h3>
        <div className="flex items-center">
          <Star className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
          <span className="text-xs sm:text-sm font-medium">{venue.rating}</span>
        </div>
      </div>

      <div className="flex items-center text-gray-600 mb-2 sm:mb-3">
        <MapPin className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
        <span className="text-xs sm:text-sm line-clamp-1">
          {venue.location}
        </span>
      </div>

      {/* <div className="flex items-center text-gray-600 mb-2 sm:mb-3">
        <Users className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
        <span className="text-xs sm:text-sm">{venue.capacity}</span>
      </div>

      <div className="flex flex-wrap gap-1 sm:gap-2 mb-3 sm:mb-4">
        {venue.features.map((feature) => {
          const key = typeof feature === "string" ? feature : feature.label;
          const label = typeof feature === "string" ? feature : feature.label;
          return (
            <span
              key={key}
              className="px-1.5 py-0.5 sm:px-2 sm:py-1 bg-gray-100 text-gray-600 text-xxs sm:text-xs rounded-full"
            >
              {label}
            </span>
          );
        })}
      </div> */}

      <div className="flex items-center justify-between  sm:flex-nowrap gap-2">
        <div className="w-full sm:w-auto">
          <span className="text-xs sm:text-sm text-gray-500">Starts from</span>
          <div className="flex items-center">
            <span className="text-xl sm:text-2xl font-semibold text-gray-900">
              LKR {venue.price.toLocaleString()}
            </span>
            <span className="text-gray-500 text-xs sm:text-sm ml-1">/Hr</span>
          </div>
        </div>
        <Link href={`/ground-details/${venue.id}`}>
          <button className="flex-col w-full sm:w-full bg-primary text-white px-4 py-2 sm:px-4 sm:py-2 rounded-lg md:rounded-xl font-medium hover:from-teal-600 hover:to-green-600 transition-all duration-200 hover:scale-105 shadow-md md:shadow-lg text-sm sm:text-base whitespace-nowrap">
            Book Slots
          </button>
        </Link>
      </div>
    </div>
  </div>
);

export default VenueCard;
