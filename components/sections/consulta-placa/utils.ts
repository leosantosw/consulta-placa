export const emptyValue = (value: string | undefined | null) =>
  value === undefined || value === null || value.trim() === "";

export const normalizePlate = (value: string) =>
  value.toUpperCase().replace(/[^A-Z0-9]/g, "").slice(0, 7);

export const joinParts = (parts: Array<string | undefined | null>) =>
  parts.filter((part) => !emptyValue(part)).join(" / ");

export const statusStyles = (status: string) => {
  if (/sem restri/i.test(status)) {
    return "bg-emerald-100 text-emerald-800";
  }
  if (/aten|pend|alert/i.test(status)) {
    return "bg-amber-100 text-amber-800";
  }
  return "bg-rose-100 text-rose-800";
};
