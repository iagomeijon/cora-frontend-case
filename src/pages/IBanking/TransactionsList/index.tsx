import "./index.css";
import { useEffect } from "react";
import { useTransactionsContext } from "../../../core/contexts/transactionContext";
import { ITransactionItem } from "../../../core/hooks/useTransactions/interfaces";
import { useAuthContext } from "../../../core/contexts/authContext";
import { formatDayDate, formatCurrency } from "./utils";
import entryIcon from "../../../assets/svg/entry.svg";
import reversalIcon from "../../../assets/svg/reversal.svg";

function TransactionList() {
  //const {  authToken } = useAuthContext();
  const { getTransactions, transactions } = useTransactionsContext();

  useEffect(() => {
    getTransactions(
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
    );
  }, []);

  const renderTransactionRow = (item: ITransactionItem) => {
    return (
      <tr className="transaction-info">
        <td className="transaction-icon entry">
          <img src={entryIcon} alt="entryIcon" title="entryIcon" />
        </td>
        <td className="transaction-name entry">Supermercado Ana Rosa</td>
        <td className="transaction-description">Recebimentos por Pix ou TED</td>
        <td className="transaction-date">20 Set 2024 - 10:26</td>
        <td className="transaction-value entry">
          {formatCurrency(item.amount)}
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

                <tr className="transaction-info">
                  <td className="transaction-name entry">
                    <img
                      src={reversalIcon}
                      alt="reversalIcon"
                      title="reversalIcon"
                    />
                  </td>
                  <td className="transaction-name">Supermercado Ana Rosa</td>
                  <td className="transaction-description">Estornos</td>
                  <td className="transaction-date">20 Set 2024 - 10:26</td>
                  <td className="transaction-value reversal">
                    - R$ 1.320.890,87
                  </td>
                </tr>
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
