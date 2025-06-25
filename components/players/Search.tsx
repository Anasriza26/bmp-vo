"use client";

import { useState } from "react";
import { CardContent } from "@/components/ui/card";
import CommonHeader from "../common/CommonHeader";
import SportSelector from "../search/SportSelector";
import TimeSelector from "../search/TimeSelector";
import DateSelector from "../search/DateSelector";
import LocationSelector from "../search/LocationSelector";
import ActionButtons from "../search/ActionButtons";

const Search = () => {
  const today = new Date().toISOString().split('T')[0];
  const [selectedSport, setSelectedSport] = useState("");
  const [selectedDate, setSelectedDate] = useState(today);
  const [startTime, setStartTime] = useState("08:00 PM");
  const [endTime, setEndTime] = useState("10:00 PM");
  const [location, setLocation] = useState("Colombo");


  return (
    <div className= "mx-auto w-full">
      <CardContent className="space-y-8 mt-4">

        <div className="flex flex-col gap-4 md:flex-row">
          <SportSelector
            selectedSport={selectedSport}
            setSelectedSport={setSelectedSport}
          />

          <TimeSelector
            startTime={startTime}
            setStartTime={setStartTime}
            endTime={endTime}
            setEndTime={setEndTime}
          />
        </div>

        <div className="flex flex-col gap-4 md:flex-row">
          <DateSelector
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
          />

          <LocationSelector
            location={location}
            setLocation={setLocation}
          />

          <ActionButtons />
        </div>

      </CardContent>
    </div>
  );
};

export default Search;
