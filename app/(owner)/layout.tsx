import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import AppSidebar from "@/components/common/Sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider  >
        <AppSidebar />
        <main className="flex flex-col  bg-white w-full">
          <SidebarTrigger className="absolute right-4 top-4 p-2 border rounded-lg lg:hidden" />
          {children}
        </main>
    </SidebarProvider>
  );
}

// mx-2 md:mx-3 lg:mx-4
