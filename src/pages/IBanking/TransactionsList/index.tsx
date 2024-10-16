import "./index.css";
import { useEffect } from "react";
import { useTransactionsContext } from "../../../core/contexts/transactionContext";
import { ITransactionItem } from "../../../core/hooks/useTransactions/interfaces";
import { useAuthContext } from "../../../core/contexts/authContext";
import { formatDayDate, formatCurrency, formatDateTime, getIcon } from "./utils";

function TransactionList() {
  //const {  authToken } = useAuthContext();
  const { getTransactions, transactions } = useTransactionsContext();

  useEffect(() => {
    getTransactions(
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
    );
  }, []);

  const renderTransactionRow = (item: ITransactionItem) => {
    const valueClass = item.entry === 'CREDIT' ? 'entry' : '';
    return (
      <tr className="transaction-info">
        <td className="transaction-icon entry">
          <img src={getIcon(item.entry)} alt="entryIcon" title="entryIcon" />
        </td>
        <td className="transaction-name entry">{item.name}</td>
        <td className="transaction-description">{item.description}</td>
        <td className="transaction-date">{formatDateTime(item.dateEvent)}</td>
        <td id="transaction-value" className={valueClass}>
          {formatCurrency(item.amount, item.entry)}
        </td>
      </tr>
    );
  };

  return (
    <main id="extract">
      {/* Debit/Credit Filters */}
      <section className="filters">
        <button className="filter active">Débito</button>
        <button className="filter">Crédito</button>
      </section>

      {transactions?.results.map((_transactionDay) => {
        return (
          <section>
            <div className="transaction-date">
              <h3>{formatDayDate(_transactionDay.date)}</h3>
              <p>
                saldo do dia <strong>R$ 3.780,08</strong>
              </p>
            </div>

            <div className="divider" />
            <table className="transaction-card">
              <tbody>
                {_transactionDay.items.map(renderTransactionRow)}
              </tbody>
            </table>
            <div className="divider" />
          </section>
        );
      })}
    </main>
  );
}

export { TransactionList };
