
import { createContext, useContext, ReactNode } from 'react';

import useTransactions from '../../hooks/useTransactions';

import { TransactionContextInterface } from './interfaces';

const TransactionContext = createContext<TransactionContextInterface>(
  {} as TransactionContextInterface,
);

function useTransactionsContext(): TransactionContextInterface {
  const context = useContext(TransactionContext);
  if (!context) {
    throw new Error('useTransaction must be used within an TransactionProvider.');
  }
  return context;
}

const TransactionsProvder = (props: { children: ReactNode }) => {
  const { children } = props;
  const {actions, state } = useTransactions();


  function getTransactions(token: string) {
    actions.getTransactions(token);
  }

  return (
    <TransactionContext.Provider
      value={{
        isLoading: state.isLoading,
        transactions: state.transactions,
        getTransactions,
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
};

export { TransactionsProvder, useTransactionsContext };
