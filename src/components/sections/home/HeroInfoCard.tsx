type HeroInfoCardProps = {
  title: string;
  value: string;
  detail: string;
  className?: string;
};

export default function HeroInfoCard({
  title,
  value,
  detail,
  className = "",
}: HeroInfoCardProps) {
  return (
    <div
      className={`pointer-events-none absolute w-40 rounded-2xl border border-border bg-background/95 p-4 shadow-lg ${className}`}
    >
      <p className="text-xs font-semibold text-text-secondary">{title}</p>
      <p className="mt-2 text-sm font-semibold text-text">{value}</p>
      <p className="text-xs text-text-secondary">{detail}</p>
    </div>
  );
}
