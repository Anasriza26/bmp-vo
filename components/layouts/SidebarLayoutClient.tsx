'use client';

import React, { useState } from 'react';
import { usePathname } from 'next/navigation';
import AppSidebar from '@/components/common/Sidebar';
import { SidebarProvider, SidebarInset } from '@/components/ui/sidebar';

export default function SidebarLayoutClient({ children }: { children: React.ReactNode }) {
  const [currentPage, setCurrentPage] = useState('dashboard');
  const pathname = usePathname();

  const hideSidebarOnRoutes = ['/', '/login', '/register']; // Add more routes as needed
  const shouldHideSidebar = hideSidebarOnRoutes.includes(pathname);

  return (
    <SidebarProvider>
      <div className="flex min-h-screen bg-gray-50">
        {!shouldHideSidebar && (
          <AppSidebar currentPage={currentPage} setCurrentPage={setCurrentPage} />
        )}
        <SidebarInset className="flex-1">
          {children}
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}
