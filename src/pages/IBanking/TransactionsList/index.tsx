import "./index.css";
import { useEffect, useState } from "react";
import { useTransactionsContext } from "../../../core/contexts/transactionContext";
import { ITransactionItem } from "../../../core/hooks/useTransactions/interfaces";
import { TransactionItem } from "./fragments/TransactionItem";
import { formatDayDate } from "./utils";

function TransactionList() {
  const { getTransactions, transactions } = useTransactionsContext();

  const [filter, setFilter] = useState<null | "DEBIT" | "CREDIT">(null);

  const toggleFilter = (entryType: "DEBIT" | "CREDIT") => {
    setFilter((currentFilter) =>
      currentFilter === entryType ? null : entryType
    );
  };

  const renderTransactionRow = (item: ITransactionItem) => (
    <TransactionItem item={item} />
  );

  const getFilteredTransactions = () => {
    if (!transactions) return undefined;

    if (!filter) {
      return transactions;
    }

    const filteredResults = transactions.results
      .map((transactionDay) => ({
        ...transactionDay,
        items: transactionDay.items.filter((item) => item.entry === filter),
      }))
      .filter((day) => day.items.length > 0);

    return {
      ...transactions,
      results: filteredResults,
      itemsTotal: filteredResults.reduce(
        (total, day) => total + day.items.length,
        0
      ),
    };
  };

  const filteredTransactions = getFilteredTransactions();

  useEffect(() => {
    getTransactions();
  }, []);

  return (
    <main id="extract">
      <section className="filters">
        <button
          className={`filter ${filter === "DEBIT" ? "active" : ""}`}
          onClick={() => toggleFilter("DEBIT")}
        >
          Débito
        </button>
        <button
          className={`filter ${filter === "CREDIT" ? "active" : ""}`}
          onClick={() => toggleFilter("CREDIT")}
        >
          Crédito
        </button>
      </section>

      {filteredTransactions?.results.map((_transactionDay) => {
        return (
          <section key={_transactionDay.date}>
            <div className="transaction-date">
              <h3>{formatDayDate(_transactionDay.date)}</h3>
              <p>
                saldo do dia <strong>R$ 3.780,08</strong>
              </p>
            </div>

            <div className="divider" />
            <table className="transaction-card">
              <tbody>{_transactionDay.items.map(renderTransactionRow)}</tbody>
            </table>
            <div className="divider" />
          </section>
        );
      })}
    </main>
  );
}

export { TransactionList };
