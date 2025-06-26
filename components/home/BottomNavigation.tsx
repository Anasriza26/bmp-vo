"use client";

import { Search, Calendar, User, Settings } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";
import SearchSheet from "./SearchSheet";
import SearchButton from "./SearchButton";

const BottomNavigation = () => {
  return (
    <>
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t shadow-md md:hidden">
        <div className="flex justify-around py-2">
          {/* Search */}

          <button className="flex flex-col items-center text-center">
            <SearchSheet />
          </button>

          {/* My Booking */}
          <Link
            href="/check-booking"
            className="flex flex-col items-center text-center"
          >
            <Calendar className="h-5 w-5" />
            <span className="text-xs mt-1">My Booking</span>
          </Link>

          {/* Profile */}
          <Link
            href="/player-profile"
            className="flex flex-col items-center text-center"
          >
            <User className="h-5 w-5" />
            <span className="text-xs mt-1">Profile</span>
          </Link>

          {/* Settings */}
          <Link href="" className="flex flex-col items-center text-center">
            <Settings className="h-5 w-5" />
            <span className="text-xs mt-1">Settings</span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default BottomNavigation;
