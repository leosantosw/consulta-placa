"use client";

import { ReactNode, useState } from "react";
import DashboardHeader from "./header/DashboardHeader";
import DashboardFooter from "./footer/DashboardFooter";
import MobileSidebar from "./sidebar/MobileSidebar";
import Sidebar from "./sidebar/Sidebar";

type DashboardLayoutProps = {
  children: ReactNode;
  title?: string;
  breadcrumb?: string;
};

export default function DashboardLayout({
  children,
  title,
}: DashboardLayoutProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-text">
      <DashboardHeader
        title={title}
        onMenuOpen={() => setIsSidebarOpen(true)}
      />
      <div className="mx-auto w-full max-w-6xl px-6 py-10">
        <div className="flex gap-8">
          <Sidebar />
          <main className="min-w-0 flex-1">{children}</main>
        </div>
      </div>
      <MobileSidebar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />
      <DashboardFooter />
    </div>
  );
}
