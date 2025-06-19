"use client";

const sports = [
  { name: "Soccer", icon: "⚽" },
  { name: "Cricket", icon: "🏏" },
  { name: "Badminton", icon: "🏸" },
  { name: "Volleyball", icon: "🏐" },
  { name: "Netball", icon: "🏀" },
  { name: "Tennis", icon: "🎾" },
];

interface Props {
  selectedSport: string;
  setSelectedSport: (sport: string) => void;
}

const SportsFilter = ({ selectedSport, setSelectedSport }: Props) => {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Choose Your Sport</h2>
      <div className="flex flex-wrap gap-4 md:gap-6">
        <button
          onClick={() => setSelectedSport("All")}
          className={`flex flex-col items-center p-4 md:p-6 rounded-2xl min-w-[100px] md:min-w-[120px] transition-all duration-200 ${
            selectedSport === "All"
              ? "bg-gradient-to-b from-teal-500 to-green-500 text-white shadow-lg scale-105"
              : "bg-white text-gray-600 hover:bg-gray-50 hover:scale-105 shadow-md"
          }`}
        >
          <span className="text-2xl md:text-3xl mb-2">🏆</span>
          <span className="text-sm md:text-base font-medium">All Sports</span>
        </button>
        {sports.map((sport) => (
          <button
            key={sport.name}
            onClick={() => setSelectedSport(sport.name)}
            className={`flex flex-col items-center p-4 md:p-6 rounded-2xl min-w-[100px] md:min-w-[120px] transition-all duration-200 ${
              selectedSport === sport.name
                ? "bg-[#25A359] text-white shadow-lg scale-105"
                : "bg-white text-gray-600 hover:bg-gray-50 hover:scale-105 shadow-md"
            }`}
          >
            <span className="text-2xl md:text-3xl mb-2">{sport.icon}</span>
            <span className="text-sm md:text-base font-medium">{sport.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default SportsFilter;