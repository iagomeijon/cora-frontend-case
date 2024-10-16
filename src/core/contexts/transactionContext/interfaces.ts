export interface TransactionContextInterface {
  isLoading?: boolean;
  transactions?: unknown;
  getTransactions: (token: string) => void;
}
