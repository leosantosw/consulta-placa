import { ReactNode } from "react";
import DashboardLayout from "../../components/dashboard/DashboardLayout";

type DashboardLayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: DashboardLayoutProps) {
  return <DashboardLayout>{children}</DashboardLayout>;
}
