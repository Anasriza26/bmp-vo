import { MapPin, Star } from "lucide-react";

const FacilityInfo = ({
  name,
  location,
  rating,
}: {
  name: string;
  location: string;
  rating: number;
}) => (
  <div className="flex flex-col w-full mb-4">
    <div className="flex items-center justify-between w-full">
      <h1 className="text-2xl font-semibold text-green-600">
        {name}
      </h1>

      <div className="flex items-center gap-1">
        {[Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`h-5 w-5 ${
              i < Math.round(rating) ? "" : "text-gray-300"
            }`}
          />
        ))}
        <span className="text-lg font-semibold text-gray-900">
          {rating}
        </span>
      </div>
    </div>

    <div className="flex items-center text-gray-600 mt-1 text-xs">
      <MapPin className="h-3 w-3 mr-1" />
      <span>{location}</span>
    </div>
  </div>
);

export default FacilityInfo;
