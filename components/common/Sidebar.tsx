import React from "react";
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
  SidebarProvider,
  SidebarInset,
} from "@/components/ui/sidebar"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
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
  Bell,
  MoreHorizontal,
  Sun,
  Moon,
  TrendingUp,
} from "lucide-react"

const navigationItems = [
  { title: "Dashboard", icon: Home, page: "dashboard" },
  { title: "Bookings", icon: Calendar, page: "bookings" },
  { title: "Slots & Rates", icon: Layers, page: "slots-rates" },
  { title: "Time Slots", icon: Clock, page: "time-slots" },
  { title: "Weekly Slot & Rate", icon: CalendarDays, page: "weekly-slot-rate" },
  { title: "Wallet", icon: Wallet, page: "wallet" },
  { title: "Turf", icon: MapPin, page: "turf" },
  { title: "Discounts", icon: Percent, page: "discounts" },
  { title: "Profile", icon: User, page: "profile" },
  { title: "Settings", icon: Settings, page: "settings" },
]
export default function AppSidebar({
  currentPage,
  setCurrentPage,
}: {
  currentPage: string;
  setCurrentPage: (page: string) => void;
}) {
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
              {navigationItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    isActive={currentPage === item.page}
                    className={
                      currentPage === item.page
                        ? "bg-green-500 text-white hover:bg-green-600"
                        : ""
                    }
                    onClick={() => setCurrentPage(item.page)}
                  >
                    <a href="#" className="flex items-center gap-3">
                      <item.icon className="w-4 h-4" />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
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
            <p className="text-xs text-gray-500 truncate">rishad@gmail.com</p>
          </div>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
