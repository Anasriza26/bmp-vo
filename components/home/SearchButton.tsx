"use client";

import { Search } from "lucide-react";
import { Button } from "../ui/button";
import SearchSheet from "./SearchSheet";

const SearchButton = () => (
  <>
    <div className="relative md:block hidden">
      <Button className="group relative w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 bg-white text-green-600">
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-green-600 group-hover:text-white transition-colors" />
        Make Your play
      </Button>
    </div>

    <div className="flex flex-col items-center justify-center md:hidden">
      <Search className="h-5 w-5 hover:bg-white" />
      <span className="text-xs mt-1"> Search</span>
    </div>
  </>
);

export default SearchButton;
