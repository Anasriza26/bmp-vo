import { Home } from "lucide-react";
import Image from "next/image";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

// Menu items.
const items = [
  {
    title: "Home",
    url: "#",
    icon: Home, // ✅ React component
  },
  {
    title: "Bookings",
    url: "#",
    icon: "/assets/admin_icons/booking.svg", // ✅ Image path
  },
  {
    title: "Turfs",
    url: "#",
    icon: "/assets/admin_icons/turfs.svg",
  },
  {
    title: "Wallet",
    url: "#",
    icon: "/assets/admin_icons/wallet.svg",
  },
  {
    title: "Players",
    url: "#",
    icon: "/assets/admin_icons/players.svg",
  },
  {
    title: "Transactions",
    url: "#",
    icon: "/assets/admin_icons/transactions.svg",
  },
  {
    title: "Promotions",
    url: "#",
    icon: "/assets/admin_icons/promotions.svg",
  },
  {
    title: "Discounts",
    url: "#",
    icon: "/assets/admin_icons/discounts.svg",
  },
  {
    title: "Inquiries",
    url: "#",
    icon: "/assets/admin_icons/inquiries.svg",
  },
  {
    title: "Staffs",
    url: "#",
    icon: "/assets/admin_icons/staffs.svg",
  },
  {
    title: "Sports",
    url: "#",
    icon: "/assets/admin_icons/sports.svg",
  },
  {
    title: "Amenity",
    url: "#",
    icon: "/assets/admin_icons/amenity.svg",
  },
];

export function AppSidebar() {
  return (
    <Sidebar className="bg-white">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="my-6">
            <Image src="/BMP-Logo.jpg" alt="Logo" width={120} height={50} />
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url} className="flex items-center gap-3">
                      {/* ✅ Check if icon is a string (image) or a component */}
                      {typeof item.icon === "string" ? (
                        <Image
                          src={item.icon}
                          alt={item.title}
                          width={20}
                          height={20}
                        />
                      ) : (
                        <item.icon className="w-5 h-5" />
                      )}
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
