import { cookies } from "next/headers";
import { SidebarProvider} from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/admin/SideBar";

export default async function Layout({ children }: { children: React.ReactNode }) {
  const cookieStore = cookies();
  // const defaultOpen = cookieStore.get("sidebar_state")?.value === "true";

  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="flex flex-col w-full mx-6">
        {children}
      </main>
    </SidebarProvider>
  );
}
