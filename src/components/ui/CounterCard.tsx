import { LucideIcon } from "lucide-react";
import Card from "@/components/ui/Card";

type CounterCardProps = {
  title: string;
  value: string;
  icon: LucideIcon;
  iconTone: string;
  cardTone: string;
  className?: string;
};

export default function CounterCard({
  title,
  value,
  icon: Icon,
  iconTone,
  cardTone,
  className = ""
}: CounterCardProps) {
  return (
    <Card className={`${cardTone} ${className}`}>
      <div className="flex flex-wrap items-center gap-3">
        <div className={`rounded-2xl p-3 ${iconTone}`}>
          <Icon className="h-5 w-5" aria-hidden="true" />
        </div>
        <span className="text-2xl font-semibold tabular-nums text-text">
          {value}
        </span>
        <span className="text-sm font-semibold text-text-secondary">
          {title}
        </span>
      </div>
    </Card>
  );
}
