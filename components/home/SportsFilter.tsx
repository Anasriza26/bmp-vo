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
  onSportToggle: (sport: string) => void;
}

const SportsFilter = ({ selectedSport, onSportToggle }: Props) => {
  return (
    <div className="my-4">
      {/* Mobile - Horizontal Slider */}
      <div className="md:hidden grid grid-cols-5">
        {sports.map((sport) => (
          <button
            key={sport.name}
            onClick={() => onSportToggle(sport.name)}
            className={`flex flex-col items-center rounded-md p-2 justify-between transition-all duration-200 ${
              selectedSport === sport.name
                ? "bg-primary text-white shadow-md"
                : "bg-transparent text-gray-600 hover:bg-gray-50"
            }`}
          >
            <span className="text-sm">
              <Image
                src={sport.icon}
                alt={`${sport.name} icon`}
                width={35}
                height={35}
                className=""
              />
            </span>
            <span className="text-[12px] font-semibold">{sport.name}</span>
          </button>
        ))}
      </div>

      {/* Desktop - Normal Grid */}
      <div className="hidden md:flex flex-wrap gap-4 md:gap-6 mx-auto justify-center">
        {sports.map((sport) => (
          <button
            key={sport.name}
            onClick={() => onSportToggle(sport.name)}
            className={`flex flex-col items-center p-6 rounded-2xl w-[120px] transition-all duration-200 ${
              selectedSport === sport.name
                ? "bg-primary text-white shadow-lg scale-105"
                : "bg-white text-gray-600 hover:bg-gray-50 border border-gray-200"
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