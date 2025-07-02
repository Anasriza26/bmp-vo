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
  features: any[]; // string or { label: string }
}

interface Props {
  venues: Venue[];
  selectedSport: string;
}

const VenueGrid = ({ venues, selectedSport }: Props) => (
  <div className="md:mb-8 mx-4 mb-16">
    <div className="flex items-center justify-between mb-2">
      <h2 className="md:text-2xl font-semibold text-gray-900 text-xl">
        {selectedSport === "All" ? "All Venues" : `${selectedSport} Venues`}
      </h2>
      <span className="text-gray-600 text-sm md:text-lg">{venues.length} venues found</span>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
      {venues.map((venue) => (
        <VenueCard key={venue.id} venue={venue} />
      ))}
    </div>
  </div>
);

export default VenueGrid;
