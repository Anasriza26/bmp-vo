import Image from "next/image";

const sports = [
  { id: "soccer", name: "Soccer", icon: "/assets/icons/SoccerBall.svg" },
  { id: "cricket", name: "Cricket", icon: "/assets/icons/cricket.svg" },
  { id: "badminton", name: "Badminton", icon: "/assets/icons/badminton.svg" },
  {
    id: "volleyball",
    name: "Volleyball",
    icon: "/assets/icons/volleyball.svg",
  },
  { id: "netball", name: "Netball", icon: "/assets/icons/basketball.svg" },
];

export default function SportSelector({
  selectedSport,
  setSelectedSport,
}: any) {
  return (
    <div className="mb-6">
      <h3 className="text-lg font-semibold text-[#475467] mb-4 px-4 sm:px-0">
        Select your sport
      </h3>

      {/* Mobile - Horizontal Slider */}
      <div className="sm:hidden px-4">
        <div className="flex overflow-x-auto pb-4 gap-3 no-scrollbar">
          {sports.map((sport) => (
            <button
              key={sport.id}
              onClick={() => setSelectedSport(sport.id)}
              className={`flex-shrink-0 p-3 rounded-xl border-2 transition-all  w-24 ${
                selectedSport === sport.id
                  ? "border-green-500 bg-green-50 text-green-700"
                  : "border-gray-200 bg-white text-gray-600 hover:border-gray-300"
              }`}
            >
              <div className="text-2xl mb-1">
                <Image
                  src={sport.icon}
                  alt={`${sport.name} icon`}
                  width={40}
                  height={40}
                  className="w-10 h-10 mx-auto"
                />
              </div>
              <div className="text-xs font-medium truncate">{sport.name}</div>
            </button>
          ))}
        </div>
      </div>

      {/* Desktop - Grid Layout */}
      <div className="hidden sm:grid grid-cols-5 gap-4">
        {sports.map((sport) => (
          <button
            key={sport.id}
            onClick={() => setSelectedSport(sport.id)}
            className={`p-4 rounded-xl border-2 transition-all  ${
              selectedSport === sport.id
                ? "border-green-500 bg-green-50 text-green-700"
                : "border-gray-200 bg-white text-gray-600 hover:border-gray-300"
            }`}
          >
            <div className="text-3xl mb-2 justify-center">
              <Image
                src={sport.icon}
                alt={`${sport.name} icon`}
                width={40}
                height={40}
                className="w-10 h-10  mx-auto"
              />
            </div>
            <div className="text-sm font-medium">{sport.name}</div>
          </button>
        ))}
      </div>
    </div>
  );
}
