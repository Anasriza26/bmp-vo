interface Amenity {
  icon: React.ElementType;
  label: string;
}

const Amenities = ({ amenities }: { amenities: Amenity[] }) => (
  <div className="mb-6">
    <h3 className="text-xl font-semibold text-gray-900 mb-4">Amenities</h3>
    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
      {amenities.map((amenity, index) => (
        <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
          <amenity.icon className="h-5 w-5 text-green-600" />
          <span className="text-sm font-medium text-gray-700">{amenity.label}</span>
        </div>
      ))}
    </div>
  </div>
);

export default Amenities;
