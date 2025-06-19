import { MapPin, Star } from "lucide-react";

const FacilityInfo = () => (
  <div className="flex items-start justify-between mb-4">
    <div>
      <h1 className="text-3xl font-bold text-green-600 mb-2">Futsal Prime - FD</h1>
      <div className="flex items-center text-gray-600 mb-3">
        <MapPin className="h-5 w-5 mr-2" />
        <span>Puttalam, Sri Lanka</span>
      </div>
      <div className="flex items-center">
        <div className="flex items-center mr-3">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`h-5 w-5 ${i < 4 ? "text-yellow-400 fill-current" : "text-gray-300"}`}
            />
          ))}
        </div>
        <span className="text-lg font-semibold text-gray-900">4.5</span>
      </div>
    </div>
  </div>
);

export default FacilityInfo;
