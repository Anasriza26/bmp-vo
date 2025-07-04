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
    <div className="mb-2 w-full">
      <h3 className="text-sm font-semibold text-[#475467] mb-2  sm:px-0 md:mb-2 md:text-base">
        Select your sport
      </h3>

      {/* Mobile - Horizontal Slider */}
      <div className=" sm:hidden">
        <div className="grid grid-cols-5 gap-1 no-scrollbar">
          {sports.map((sport) => (
            <button
              key={sport.id}
              onClick={() => setSelectedSport(sport.id)}
              className={`p-1 rounded-xl border-2 transition-all ${
                selectedSport === sport.id
                  ? "border-green-500 bg-green-50 text-green-700"
                  : "border-gray-200 bg-white text-gray-600 hover:border-gray-300"
              }`}
            >
              <div className="">
                <Image
                  src={sport.icon}
                  alt={`${sport.name} icon`}
                  width={24}
                  height={24}
                  className="mx-auto"
                />
              </div>
              <div className="text-[8px] font-semibold mx-auto pt-1">
                {sport.name}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Desktop - Grid Layout */}
      <div className="hidden sm:grid grid-cols-5 md:gap-1">
        {sports.map((sport) => (
          <button
            key={sport.id}
            onClick={() => setSelectedSport(sport.id)}
            className={`md:p-2 md:rounded-xl md:border-2   ${
              selectedSport === sport.id
                ? "border-green-500 bg-green-50 text-green-700"
                : "border-gray-200 bg-white text-gray-600 hover:border-gray-300"
            }`}
          >
            <div className="justify-center md:mb-2">
              <Image
                src={sport.icon}
                alt={`${sport.name} icon`}
                width={40}
                height={40}
                className="mx-auto md:w-[30px] md:h-[30px]"
              />
            </div>
            <div className="md:text-[10px] font-semibold  md:justify-center lg:text-xs">
              {sport.name}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
