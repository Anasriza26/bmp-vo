import { Button } from "@/components/ui/button";
import { Search as SearchIcon, X } from "lucide-react";

export default function ActionButtons() {
  return (
    <div className="grid md:grid-cols-2 gap-2 mt-4">
      <Button className="flex-1bg-green-500 hover:bg-green-600 text-white font-semibold text-lg ">
        <SearchIcon className="w-5 h-5 mr-2" />
        Search
      </Button>

      <Button className="text-[#344054] font-semibold text-lg bg-white border-2 border-[#344054]">
        Cancel
      </Button>
    
    </div>
  );
}
