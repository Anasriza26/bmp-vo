interface Amenity {
  icon: React.ElementType;
  label: string;
}

const Amenities = ({ amenities }: { amenities: Amenity[] }) => (
  <div className="mb-6">
    <h3 className="text-lg font-semibold text-gray-900 mb-2">Amenities</h3>
    <div className="grid grid-cols-3 md:grid-cols-4 gap-3 md:gap-4">
      {amenities.map((amenity, index) => (
        <div key={index} className="flex items-center px-1  bg-gray-50 rounded-2xl justify-center">
          <span className="text-sm font-semibold text-gray-500">{amenity.label}</span>
        </div>
      ))}
    </div>
  </div>
);

export default Amenities;
