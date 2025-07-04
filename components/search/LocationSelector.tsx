import { MapPin } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import ActionButtons from "./ActionButtons";

export default function LocationSelector({ location, setLocation }: any) {
  return (
    <>
      <div className="">
        <div className="w-full md:py-2">
          <h3 className="text-sm font-semibold text-gray-900 pb-2 flex items-center gap-2 md:text-base">
            Enter your location
            <MapPin className="w-5 h-5" />
          </h3>
        </div>
        <div className="w-full gap-2">
          <Select value={location} onValueChange={setLocation}>
            <SelectTrigger className="w-full h-12 text-left">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {[
                "Colombo",
                "Kandy",
                "Galle",
                "Jaffna",
                "Negombo",
                "Puttalam",
              ].map((city) => (
                <SelectItem key={city} value={city}>
                  {city}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
    </>
  );
}
