"use client";

import { Search, Calendar, User, Settings, House,Bell } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";
import SearchSheet from "./SearchSheet";
import SearchButton from "./SearchButton";

const BottomNavigation = () => {
  return (
    <>
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t shadow-md md:hidden">
        <div className="flex justify-around py-2">
          {/* Home Page */}
          <Link
            href="/home"
            className="flex flex-col items-center text-center"
          >
            <House className="h-5 w-5" />
            <span className="text-xs mt-1">Home</span>
          </Link>

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

           {/* Notification */}
          <Link href="/notificatiion" className="flex flex-col items-center text-center">
            <Bell className="h-5 w-5" />
            <span className="text-xs mt-1">Notification</span>
          </Link>

          {/* Profile */}
          <Link
            href="/player-profile"
            className="flex flex-col items-center text-center"
          >
            <User className="h-5 w-5" />
            <span className="text-xs mt-1">Profile</span>
          </Link>

         
        </div>
      </div>
    </>
  );
};

export default BottomNavigation;
