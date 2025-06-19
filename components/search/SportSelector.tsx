const sports = [
  { id: "soccer", name: "Soccer", icon: "⚽" },
  { id: "cricket", name: "Cricket", icon: "🏏" },
  { id: "badminton", name: "Badminton", icon: "🏸" },
  { id: "volleyball", name: "Volleyball", icon: "🏐" },
  { id: "netball", name: "Netball", icon: "🏀" },
];

export default function SportSelector({ selectedSport, setSelectedSport }: any) {
  return (
    <div>
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Select your sport</h3>
      <div className="grid grid-cols-5 gap-4">
        {sports.map((sport) => (
          <button
            key={sport.id}
            onClick={() => setSelectedSport(sport.id)}
            className={`p-4 rounded-xl border-2 transition-all duration-200 hover:scale-105 ${
              selectedSport === sport.id
                ? "border-green-500 bg-green-50 text-green-700"
                : "border-gray-200 bg-white text-gray-600 hover:border-gray-300"
            }`}
          >
            <div className="text-3xl mb-2">{sport.icon}</div>
            <div className="text-sm font-medium">{sport.name}</div>
          </button>
        ))}
      </div>
    </div>
  );
}
