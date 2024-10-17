export interface ITransactionsResponse {
  results: ITransactionDay[];
  itemsTotal: number;
}

export interface ITransactionDay {
  date: string;
  items: ITransactionItem[];
  balance: string;
}

export interface ITransactionItem {
  id: string;
  description: string;
  label: string;
  entry: "DEBIT" | "CREDIT";
  amount: number;
  name: string;
  dateEvent: string;
  status: string;
}
