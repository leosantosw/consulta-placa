import { ReactNode } from "react";
import DashboardFooter from "./footer/DashboardFooter";
import Sidebar from "./sidebar/Sidebar";
import DashboardNavigation from "./DashboardShell";
import UserCredits from "./sidebar/UserCredits";

type DashboardLayoutProps = {
  children: ReactNode;
  title?: string;
  breadcrumb?: string;
};

export default function DashboardLayout({
  children,
  title,
}: DashboardLayoutProps) {
  return (
    <div className="min-h-screen bg-background text-text">
      <DashboardNavigation title={title} mobileCredits={<UserCredits />} />
      <div className="mx-auto w-full max-w-6xl px-6 py-10">
        <div className="flex gap-8">
          <Sidebar />
          <main className="min-w-0 flex-1">{children}</main>
        </div>
      </div>
      <DashboardFooter />
    </div>
  );
}
