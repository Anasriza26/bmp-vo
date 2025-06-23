// app/layout.tsx
import type { Metadata } from 'next';
import './globals.css';
// import SidebarLayoutClient from '@/components/layouts/SidebarLayoutClient';

export const metadata: Metadata = {
  title: 'v0 App',
  description: 'Created with v0',
  generator: 'v0.dev',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* <SidebarLayoutClient>{children}</SidebarLayoutClient> */}
        {children}
      </body>
    </html>
  );
}
