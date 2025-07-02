"use client";

import { usePathname } from "next/navigation";
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

// Menu items
const items = [
  {
    title: "Dashboard",
    url: "/admin",
    icon: Home,
  },
  {
    title: "Bookings",
    url: "/admin/bookings",
    icon: "/assets/admin_icons/booking.svg",
  },
  {
    title: "Turfs",
    url: "/admin/turfs",
    icon: "/assets/admin_icons/turfs.svg",
  },
  {
    title: "Wallet",
    url: "/admin/wallet",
    icon: "/assets/admin_icons/wallet.svg",
  },
  {
    title: "Players",
    url: "/admin/players",
    icon: "/assets/admin_icons/players.svg",
  },
  {
    title: "Owners",
    url: "/admin/owners",
    icon: "/assets/admin_icons/owners.svg",
  },
  {
    title: "Payments",
    url: "/admin/payments",
    icon: "/assets/admin_icons/payments.svg",
  },
  {
    title: "Transactions",
    url: "/admin/transactions",
    icon: "/assets/admin_icons/transactions.svg",
  },
  {
    title: "Promotions",
    url: "/admin/promotions",
    icon: "/assets/admin_icons/promotions.svg",
  },
  {
    title: "Discounts",
    url: "/admin/discounts",
    icon: "/assets/admin_icons/discounts.svg",
  },
  {
    title: "Inquiries",
    url: "/admin/inquiries",
    icon: "/assets/admin_icons/inquiries.svg",
  },
  {
    title: "Staffs",
    url: "/admin/staffs",
    icon: "/assets/admin_icons/staffs.svg",
  },
  {
    title: "Sports",
    url: "/admin/sports",
    icon: "/assets/admin_icons/sports.svg",
  },
  {
    title: "Amenity",
    url: "/admin/amenity",
    icon: "/assets/admin_icons/amenity.svg",
  },
];

export function AppSidebar() {
  const pathname = usePathname();

  return (
    <Sidebar className="bg-white">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="my-6">
            <Image src="/BMP-Logo.jpg" alt="Logo" width={120} height={50} />
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => {
                const isActive = pathname === item.url;
                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <a
                        href={item.url}
                        className={`flex items-center gap-3 px-3 py-2 rounded-md ${
                          isActive ? "bg-primary text-white" : "hover:bg-gray-100"
                        }`}
                      >
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
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
