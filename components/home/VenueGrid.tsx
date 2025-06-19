"use client";

import VenueCard from "./VenueCard";

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

interface Props {
  venues: Venue[];
  selectedSport: string;
}

const VenueGrid = ({ venues, selectedSport }: Props) => (
  <div className="mb-8">
    <div className="flex items-center justify-between mb-6">
      <h2 className="text-2xl font-bold text-gray-900">
        {selectedSport === "All" ? "All Venues" : `${selectedSport} Venues`}
      </h2>
      <span className="text-gray-600">{venues.length} venues found</span>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
      {venues.map((venue) => (
        <VenueCard key={venue.id} venue={venue} />
      ))}
    </div>
  </div>
);

export default VenueGrid;