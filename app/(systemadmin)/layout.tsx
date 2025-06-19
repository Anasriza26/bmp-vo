import SidebarLayoutClient from '@/components/layouts/SidebarLayoutClient';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return <SidebarLayoutClient>{children}</SidebarLayoutClient>;
}
