"use client";

import { ReactNode, useState } from "react";
import DashboardHeader from "./header/DashboardHeader";
import MobileSidebar from "./sidebar/MobileSidebar";

type DashboardNavigationProps = {
  title?: string;
  mobileCredits?: ReactNode;
};

export default function DashboardNavigation({
  title,
  mobileCredits,
}: DashboardNavigationProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      <DashboardHeader
        title={title}
        onMenuOpen={() => setIsSidebarOpen(true)}
      />
      <MobileSidebar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
        creditsSlot={mobileCredits}
      />
    </>
  );
}
