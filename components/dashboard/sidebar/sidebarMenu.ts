import { Car, FileSearch, ReceiptText } from "lucide-react";
import { LucideIcon } from "lucide-react";

export type SidebarLinkItem = {
  label: string;
  href: string;
  icon: LucideIcon;
};

export type SidebarMenuSection = {
  title: string;
  items: SidebarLinkItem[];
};

export const sidebarMenu: SidebarMenuSection[] = [
  {
    title: "Veículos",
    items: [
      {
        label: "Consulta de Placa",
        href: "/dashboard/consulta-placa",
        icon: Car,
      },
      {
        label: "Multas e Infrações",
        href: "/dashboard/consulta-multas",
        icon: ReceiptText,
      },
    ],
  },
  {
    title: "Pessoas",
    items: [
      {
        label: "Consultar Receita Federal",
        href: "/dashboard/consultar-receita-federal",
        icon: FileSearch,
      },
    ],
  },
];
