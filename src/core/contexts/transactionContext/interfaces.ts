import {ITransactionsResponse} from '../../hooks/useTransactions/interfaces'

export interface TransactionContextInterface {
  isLoading?: boolean;
  transactions?: ITransactionsResponse;
  getTransactions: (token: string) => void;
}
