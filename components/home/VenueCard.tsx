"use client";

import { MapPin, Star, Users } from "lucide-react";

interface Venue {
  id: number;
  name: string;
  location: string;
  rating: number;
  price: number;
  image: string;
  sport: string;
  capacity: string;
  features: string[];
}

const VenueCard = ({ venue }: { venue: Venue }) => (
  <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
    <div className="relative">
      <img src={venue.image} alt={venue.name} className="w-full h-48 md:h-56 object-cover" />
      <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center">
        <Star className="w-4 h-4 text-yellow-500 fill-current mr-1" />
        <span className="text-sm font-medium">{venue.rating}</span>
      </div>
    </div>
    <div className="p-6">
      <h3 className="text-xl font-bold text-gray-900 mb-2">{venue.name}</h3>
      <div className="flex items-center text-gray-600 mb-3">
        <MapPin className="w-4 h-4 mr-2" />
        <span className="text-sm">{venue.location}</span>
      </div>
      <div className="flex items-center text-gray-600 mb-3">
        <Users className="w-4 h-4 mr-2" />
        <span className="text-sm">{venue.capacity}</span>
      </div>
      <div className="flex flex-wrap gap-2 mb-4">
        {venue.features.map((feature) => (
          <span key={feature} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
            {feature}
          </span>
        ))}
      </div>
      <div className="flex items-center justify-between">
        <div>
          <span className="text-sm text-gray-500">Starts from</span>
          <div className="flex items-center">
            <span className="text-2xl font-bold text-gray-900">
              LKR {venue.price.toLocaleString()}
            </span>
            <span className="text-gray-500 ml-1">/Hr</span>
          </div>
        </div>
        <button className="bg-gradient-to-r from-teal-500 to-green-500 text-white px-6 py-3 rounded-xl font-medium hover:from-teal-600 hover:to-green-600 transition-all duration-200 hover:scale-105 shadow-lg">
          Book Slots
        </button>
      </div>
    </div>
  </div>
);

export default VenueCard;