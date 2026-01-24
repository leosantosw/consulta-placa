import creditPlansData from "@/../creditPlans.json";

export type CreditPlan = {
  id: string;
  name: string;
  credits: number;
  priceCents: number;
  recommended?: boolean;
  badge?: string;
};

export const creditPlans = creditPlansData satisfies CreditPlan[];
