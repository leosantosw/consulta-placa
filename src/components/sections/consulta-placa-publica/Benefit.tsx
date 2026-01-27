import { CheckCircle2 } from "lucide-react";

type BenefitProps = {
  text: string;
};

export default function Benefit({ text }: BenefitProps) {
  return (
    <div className="flex items-center gap-2 text-white">
      <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-green-400" />
      <span className="text-sm">{text}</span>
    </div>
  );
}
