"use client";

import React from "react";
import { usePathname, useRouter } from "next/navigation";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Home,
  Calendar,
  Layers,
  Clock,
  CalendarDays,
  Wallet,
  MapPin,
  Percent,
  User,
  Settings,
} from "lucide-react";

const navigationItems = [
  { title: "Dashboard", icon: Home, page: "dashboard" },
  { title: "Bookings", icon: Calendar, page: "bookings" },
  { title: "Slots & Rates", icon: Layers, page: "slotsrates" },
  { title: "Time Slots", icon: Clock, page: "timeslots" },
  { title: "Weekly Slot & Rate", icon: CalendarDays, page: "weeklyslotsrates" },
  { title: "Wallet", icon: Wallet, page: "wallet" },
  { title: "Turf", icon: MapPin, page: "turf" },
  { title: "Discounts", icon: Percent, page: "discounts" },
  { title: "Profile", icon: User, page: "profile" },
  // { title: "Settings", icon: Settings, page: "settings" },
];

export default function AppSidebar() {
  const router = useRouter();
  const pathname = usePathname();

  // Get the current page from the path (e.g., "dashboard", "bookings")
  const currentPage = pathname?.split("/")[1] || "";

  return (
    <Sidebar className="border-r border-gray-200">
      <SidebarHeader className="p-4">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-green-500 rounded flex items-center justify-center">
            <span className="text-white font-bold text-sm">DMP</span>
          </div>
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {navigationItems.map((item) => {
                const isActive = currentPage === item.page;

                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton
                      asChild
                      isActive={isActive}
                      className={
                        isActive
                          ? "bg-green-500 text-white hover:bg-green-600"
                          : ""
                      }
                      onClick={() => router.push(`/${item.page}`)}
                    >
                      <button className="w-full flex items-center gap-3 text-left">
                        <item.icon className="w-4 h-4" />
                        <span>{item.title}</span>
                      </button>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="p-4">
        <div className="flex items-center gap-3">
          <Avatar className="w-8 h-8">
            <AvatarImage src="/placeholder.svg?height=32&width=32" />
            <AvatarFallback>MR</AvatarFallback>
          </Avatar>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-gray-900 truncate">
              Mohamed Rishad
            </p>
            <p className="text-xs text-gray-500 truncate">
              rishad@gmail.com
            </p>
          </div>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
