"use client";

import { Search } from "lucide-react";
import { Button } from "../ui/button";

const SearchButton = () => (
  <div className="relative">
    <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-green-600 w-5 h-5" />
    <Button className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2  bg-white text-green-600 ">
      Make Your play
    </Button>
    
  </div>
);

export default SearchButton;
