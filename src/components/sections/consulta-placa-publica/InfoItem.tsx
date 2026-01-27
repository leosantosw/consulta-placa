type InfoItemProps = {
  label: string;
  value: string;
};

export default function InfoItem({ label, value }: InfoItemProps) {
  return (
    <div className="rounded-xl border border-gray-200 bg-gray-50 p-3">
      <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">
        {label}
      </p>
      <p className="mt-2 text-base font-semibold text-gray-900">
        {value}
      </p>
    </div>
  );
}
