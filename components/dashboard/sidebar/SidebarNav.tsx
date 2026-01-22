"use client";

import { usePathname } from "next/navigation";
import SidebarLink from "./SidebarLink";
import SidebarSection from "./SidebarSection";
import { sidebarMenu } from "./sidebarMenu";

type SidebarNavProps = {
  onNavigate?: () => void;
};

export default function SidebarNav({ onNavigate }: SidebarNavProps) {
  const pathname = usePathname();

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
    </nav>
  );
}
