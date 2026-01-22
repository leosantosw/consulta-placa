import Link from "next/link";
import { LucideIcon } from "lucide-react";

type SidebarLinkProps = {
  href: string;
  label: string;
  icon: LucideIcon;
  isActive: boolean;
  onClick?: () => void;
};

export default function SidebarLink({
  href,
  label,
  icon: Icon,
  isActive,
  onClick,
}: SidebarLinkProps) {
  const baseClasses =
    "group flex items-center gap-3 rounded-xl px-3 py-2 text-sm font-medium transition";
  const stateClasses = isActive
    ? "relative bg-primary/10 text-text"
    : "text-text-secondary hover:bg-primary/5 hover:text-text";
  const indicatorClasses = isActive
    ? "before:absolute before:left-0 before:top-1/2 before:h-5 before:w-0.5 before:-translate-y-1/2 before:rounded-full before:bg-primary before:content-['']"
    : "";

  return (
    <Link
      href={href}
      onClick={onClick}
      className={[baseClasses, stateClasses, indicatorClasses, "pl-4"].join(
        " "
      )}
      aria-current={isActive ? "page" : undefined}
    >
      <Icon
        className={
          isActive
            ? "h-4 w-4 text-primary"
            : "h-4 w-4 text-text-secondary group-hover:text-text"
        }
      />
      <span>{label}</span>
    </Link>
  );
}
