"use client";

import { Search, MapPin, Bell } from "lucide-react";
import Image from "next/image";

interface HeaderProps {
  searchTerm: string;
  setSearchTerm: (value: string) => void;
}

const Header = ({ searchTerm, setSearchTerm }: HeaderProps) => {
  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex items-center space-x-4">
            <Image src="/BMP-Logo.jpg" alt="Logo" width={126} height={40} className="w-[126px] h-[40px]" />
            <div className="hidden md:flex items-center text-gray-600">
              <MapPin className="w-5 h-5 mr-2" />
              <span className="text-sm">Puttalam, Sri Lanka</span>
            </div>
          </div>
          <div className="hidden md:flex flex-1 max-w-2xl mx-8">
            <div className="relative w-full">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search venues, sports, or locations..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 bg-gray-50"
              />
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <button className="relative p-2 text-gray-600 hover:text-[#25A359] transition-colors">
              <Bell className="w-6 h-6" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;