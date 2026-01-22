"use client";

import { usePathname, useRouter } from "next/navigation";
import { LogOut } from "lucide-react";
import SidebarLink from "./SidebarLink";
import SidebarSection from "./SidebarSection";
import { sidebarMenu } from "./sidebarMenu";
import { useAuth } from "@/hooks/useAuth";

type SidebarNavProps = {
  onNavigate?: () => void;
};

export default function SidebarNav({ onNavigate }: SidebarNavProps) {
  const pathname = usePathname();
  const router = useRouter();
  const { logout } = useAuth();

  const handleLogout = async () => {
    await logout();
    if (onNavigate) {
      onNavigate();
    }
    router.push("/login");
  };

  return (
    <nav className="space-y-8">
      {sidebarMenu.map((section) => (
        <SidebarSection key={section.title} title={section.title}>
          {section.items.map((item) => {
            const isActive =
              pathname === item.href || pathname.startsWith(`${item.href}/`);

            return (
              <SidebarLink
                key={item.href}
                href={item.href}
                label={item.label}
                icon={item.icon}
                isActive={isActive}
                onClick={onNavigate}
              />
            );
          })}
        </SidebarSection>
      ))}
      <SidebarSection title="Conta">
        <button
          type="button"
          onClick={handleLogout}
          className="group flex w-full cursor-pointer items-center gap-3 rounded-xl px-3 py-2 pl-4 text-sm font-medium text-rose-600 transition hover:bg-rose-500/10"
        >
          <LogOut className="h-4 w-4 text-rose-600" />
          <span>Sair</span>
        </button>
      </SidebarSection>
    </nav>
  );
}
