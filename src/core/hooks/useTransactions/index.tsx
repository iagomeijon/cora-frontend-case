import { useState } from "react";
import axios from "axios";
import { ITransactionsResponse } from "./interfaces";

export default function useTransactions() {
  const [transactions, setTransactions] =
    useState<ITransactionsResponse | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  function clean(): void {
    setIsLoading(false);
    setTransactions(null);
  }

  async function getTransactions(): Promise<void> {
    clean();
    setIsLoading(true);
    const token = localStorage.getItem("authToken");
    try {
      const response = await axios.get<ITransactionsResponse>("/list", {
        headers: {
          "Content-Type": "application/json",
          token: token,
        },
      });

      setTransactions(response.data);
    } finally {
      setIsLoading(false);
    }
  }

  return {
    state: {
      isLoading,
      transactions,
    },

    actions: {
      getTransactions,
      clean,
    },
  };
}
