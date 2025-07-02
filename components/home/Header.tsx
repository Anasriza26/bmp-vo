"use client";

import { Menu, MapPin, Bell } from "lucide-react";
import Image from "next/image";
import SearchBar from "./SearchButton";
import HomeMenu from "@/components/home/HomeMenu";
import SearchButton from "./SearchButton";
import SearchSheet from "./SearchSheet";



const Header = () => {
  return (
    <header className="bg-white shadow-lg top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex h-16 md:h-20 justify-between items-center">
          {/* Left Section */}
          <div className="flex flex-col items-start">
            <div className="flex items-center justify-center md:justify-start text-gray-600 mb-2">
              <MapPin className="w-4 h-4 md:w-5 md:h-5 mr-1 md:mr-2" />
              <span className="text-xs md:text-sm">Puttalam, Sri Lanka</span>
            </div>
            <Image
              src="/BMP-Logo.jpg"
              alt="Logo"
              width={126}
              height={30}
              className="w-[126px] h-[40px]"
            />
          </div>

          {/* Right Section */}
          <div className="flex items-center space-x-4">
            {/* Search Bar Moved Here */}
            <div className="hidden md:block">
              {/* <SearchButton  /> */}
              <SearchSheet />
            </div>

            {/* Bell Icon */}
            <button className="relative p-2 text-gray-600 hover:text-primary transition-colors">
              <Bell className="w-6 h-6" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
            </button>

            {/* Home Menu */}
            <div className="hidden md:block">
              <HomeMenu />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
