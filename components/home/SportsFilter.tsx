"use client";

import Image from "next/image";

const sports = [
  { name: "Soccer", icon: "/assets/icons/SoccerBall.svg" },
  { name: "Cricket", icon: "/assets/icons/Cricket.svg" },
  { name: "Badminton", icon: "/assets/icons/Badminton.svg" },
  { name: "Volleyball", icon: "/assets/icons/Volleyball.svg" },
  { name: "Netball", icon: "/assets/icons/Basketball.svg" },
];

interface Props {
  selectedSport: string;
  setSelectedSport: (sport: string) => void;
}

const SportsFilter = ({ selectedSport, setSelectedSport }: Props) => {
  return (
    <div className="mb-8">

      {/* Mobile - Horizontal Slider */}
      <div className="md:hidden flex overflow-x-auto no-scrollbar pb-4 px-4 space-x-4">
        {sports.map((sport) => (
          <button
            key={sport.name}
            onClick={() => setSelectedSport(sport.name)}
            className={`flex-shrink-0 flex flex-col items-center p-4 rounded-2xl min-w-[100px] transition-all duration-200 ${
              selectedSport === sport.name
                ? "bg-[#25A359] text-white shadow-lg scale-105"
                : "bg-white text-gray-600 hover:bg-gray-50 hover:scale-105 shadow-md"
            }`}
          >
            <span className="text-2xl mb-2">
              {" "}
              <Image
                src={sport.icon}
                alt={`${sport.name} icon`}
                width={40}
                height={40}
                className="w-10 h-10"
              />
            </span>
            <span className="text-sm font-medium">{sport.name}</span>
          </button>
        ))}
      </div>

      {/* Desktop - Normal Grid */}
      <div className="hidden md:flex flex-wrap gap-4 md:gap-6">
        {sports.map((sport) => (
          <button
            key={sport.name}
            onClick={() => setSelectedSport(sport.name)}
            className={`flex flex-col items-center p-6 rounded-2xl w-[120px] transition-all duration-200 ${
              selectedSport === sport.name
                ? "bg-[#25A359] text-white shadow-lg scale-105"
                : "bg-white text-gray-600 hover:bg-gray-50 hover:scale-105 shadow-md"
            }`}
          >
            <span className="text-3xl mb-2">
              <Image
                src={sport.icon}
                alt={`${sport.name} icon`}
                width={40}
                height={40}
                className="w-10 h-10"
              />
            </span>
            <span className="text-base font-medium">{sport.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default SportsFilter;
