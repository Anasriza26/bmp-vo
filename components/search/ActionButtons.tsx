import { Button } from "@/components/ui/button";
import { Search as SearchIcon, X } from "lucide-react";

export default function ActionButtons() {
  return (
    <div className="flex flex-col sm:flex-row md:pt-14">
      <Button className="flex-1 h-12 bg-green-500 hover:bg-green-600 text-white font-semibold text-lg ">
        <SearchIcon className="w-5 h-5 mr-2" />
        Search
      </Button>
    
    </div>
  );
}
