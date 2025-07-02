"use client";
import React, { useState } from "react";
import Header from "@/components/home/Header";
import SearchBar from "@/components/home/SearchButton";
import SportsFilter from "@/components/home/SportsFilter";
import VenueGrid from "@/components/home/VenueGrid";
import NoResults from "@/components/home/NoResults";
import { venues } from "@/constants/data";
import BottomNavigation from "../home/BottomNavigation";

const Home = () => {
  const [selectedSport, setSelectedSport] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  // Toggle function for sports filter
  const handleSportToggle = (sport: string) => {
    if (selectedSport === sport) {
      // If the same sport is clicked, toggle back to "All"
      setSelectedSport("All");
    } else {
      // If a different sport is clicked, select that sport
      setSelectedSport(sport);
    }
  };

  const filteredVenues = venues.filter((venue) => {
    const matchesSport =
      selectedSport === "All" || venue.sport === selectedSport;
    const matchesSearch =
      venue.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      venue.location.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesSport && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="md:max-w-7xl mx-auto sm:px-6 lg:px-8 md:py-8">
        {/* <div className="md:hidden mb-6">
          <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        </div> */}
        <SportsFilter
          selectedSport={selectedSport}
          onSportToggle={handleSportToggle}
        />
        {filteredVenues.length > 0 ? (
          <VenueGrid venues={filteredVenues} selectedSport={selectedSport} />
        ) : (
          <NoResults />
        )}
        <BottomNavigation />
      </main>
    </div>
  );
};

export default Home;