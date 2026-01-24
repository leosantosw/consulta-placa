import 'server-only'
import { getAuthToken } from "@/lib/auth/session";

type WalletResponse = {
  userId: string;
  balance: number;
  updatedAt: string;
};

export const getWallet = async (): Promise<WalletResponse | null> => {
  const token = await getAuthToken();
  if (!token) {
    return null;
  }

  const response = await fetch(`${process.env.API_URL}/api/wallets`, {
    headers: {
      Authorization: `Bearer ${token}`
    },
    cache: "no-store"
  });

  if (!response.ok) {
    return null;
  }

  return response.json();
};
