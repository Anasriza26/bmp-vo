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
  const today = new Date().toISOString().split("T")[0];
  const [selectedSport, setSelectedSport] = useState("");
  const [selectedDate, setSelectedDate] = useState(today);
  const [startTime, setStartTime] = useState("08:00 PM");
  const [endTime, setEndTime] = useState("10:00 PM");
  const [location, setLocation] = useState("Colombo");

  return (
    <div className="mx-auto w-full">
      <CardContent className="mt-2">
        <div className="grid gap-4 md:grid-cols-2">
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

      <div className="md:grid md:grid-cols-2 md:gap-2">
        <DateSelector
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
        />

        <LocationSelector location={location} setLocation={setLocation} />
        </div>

        <ActionButtons />
      </CardContent>
    </div>
  );
};

export default Search;
