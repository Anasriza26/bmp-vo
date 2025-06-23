import AppSidebar from "@/components/common/Sidebar";
import SidebarLayoutClient from "@/components/layouts/SidebarLayoutClient";
import {
  Sidebar,
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <AppSidebar />
      {/* <SidebarInset> */}
        <main className="flex flex-col w-full">{children}</main>
      {/* </SidebarInset> */}
    </SidebarProvider>
  );
}
