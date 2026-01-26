import { BookOpen, CreditCard, HelpCircle, Sparkles } from "lucide-react";

export const navLinks = [
  { label: "Planos", href: "/#planos", Icon: CreditCard },
  { label: "Como funciona", href: "/#como-funciona", Icon: Sparkles },
  { label: "FAQ", href: "/#faq", Icon: HelpCircle },
  { label: "Blog", href: "/blog", Icon: BookOpen },
] as const;
