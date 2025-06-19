import { MapPin } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function LocationSelector({ location, setLocation }: any) {
  return (
    <div>
      <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
        <MapPin className="w-5 h-5" />
        Enter your location
      </h3>
      <Select value={location} onValueChange={setLocation}>
        <SelectTrigger className="w-full h-12 text-left">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {["Colombo", "Kandy", "Galle", "Jaffna", "Negombo", "Puttalam"].map((city) => (
            <SelectItem key={city} value={city}>
              {city}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
