import { Button } from "@/components/ui/button";
import { Search as SearchIcon, X } from "lucide-react";

export default function ActionButtons() {
  return (
    <div className="flex gap-4 pt-6">
      <Button className="flex-1 h-12 bg-green-500 hover:bg-green-600 text-white font-semibold text-lg">
        <SearchIcon className="w-5 h-5 mr-2" />
        Search
      </Button>
      <Button
        variant="outline"
        className="flex-1 h-12 border-gray-300 text-gray-700 font-semibold text-lg hover:bg-gray-50"
      >
        <X className="w-5 h-5 mr-2" />
        Cancel
      </Button>
    </div>
  );
}
