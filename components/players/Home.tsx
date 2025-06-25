"use client";

import React, { useState } from "react";
import Header from "@/components/home/Header";
import SearchBar from "@/components/home/SearchButton";
import SportsFilter from "@/components/home/SportsFilter";
import VenueGrid from "@/components/home/VenueGrid";
import NoResults from "@/components/home/NoResults";
import { venues } from "@/constants/data";

const Home = () => {
  const [selectedSport, setSelectedSport] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredVenues = venues.filter((venue) => {
    const matchesSport =
      selectedSport === "All" || venue.sport === selectedSport;
    const matchesSearch =
      venue.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      venue.location.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesSport && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-teal-50">
      <Header  />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-8">
        {/* <div className="md:hidden mb-6">
          <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        </div> */}
        <SportsFilter
          selectedSport={selectedSport}
          setSelectedSport={setSelectedSport}
        />
        {filteredVenues.length > 0 ? (
          <VenueGrid venues={filteredVenues} selectedSport={selectedSport} />
        ) : (
          <NoResults />
        )}
      </main>
    </div>
  );
};

export default Home;
