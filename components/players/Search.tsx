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
  const [selectedSport, setSelectedSport] = useState("");
  const [selectedDate, setSelectedDate] = useState(22);
  const [startTime, setStartTime] = useState("08:00 PM");
  const [endTime, setEndTime] = useState("10:00 PM");
  const [location, setLocation] = useState("Colombo");

  return (
    <div className="min-h-screen bg-inherit">
      <div className="max-w-4xl mx-auto">
        <CommonHeader
          title="Plan your play"
          subtitle="By providing the sport, time and date you will be get the filtered grounds."
        />

        <CardContent className="space-y-8 mt-4">
          <SportSelector
            selectedSport={selectedSport}
            setSelectedSport={setSelectedSport}
          />
          <div className="grid gap-8">
            <TimeSelector
              startTime={startTime}
              setStartTime={setStartTime}
              endTime={endTime}
              setEndTime={setEndTime}
            />
            <DateSelector
              selectedDate={selectedDate}
              setSelectedDate={setSelectedDate}
            />
          </div>
          <LocationSelector
            location={location}
            setLocation={setLocation}
          />
          <ActionButtons />
        </CardContent>
      </div>
    </div>
  );
};

export default Search;
