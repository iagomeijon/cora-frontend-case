import "./index.css";
import { useEffect, useState } from "react";
import { useTransactionsContext } from "../../../core/contexts/transactionContext";
import { ITransactionItem } from "../../../core/hooks/useTransactions/interfaces";
import useStrings from "../../../core/hooks/useStrings";
import { TransactionItem } from "./fragments/TransactionItem";
import { formatDayDate } from "./utils";

function TransactionList() {
  const { strings } = useStrings();
  const { Transactions: TransactionsStrings } = strings.components;

  const { getTransactions, transactions } = useTransactionsContext();

  const [filter, setFilter] = useState<null | "DEBIT" | "CREDIT">(null);

  const toggleFilter = (entryType: "DEBIT" | "CREDIT") => {
    setFilter((currentFilter) =>
      currentFilter === entryType ? null : entryType
    );
  };

  const renderTransactionRow = (item: ITransactionItem) => (
    <TransactionItem key={item.id} item={item} />
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
          {TransactionsStrings.debit}
        </button>
        <button
          className={`filter ${filter === "CREDIT" ? "active" : ""}`}
          onClick={() => toggleFilter("CREDIT")}
        >
          {TransactionsStrings.credit}
        </button>
      </section>

      {filteredTransactions?.results.map((_transactionDay) => {
        return (
          <section key={_transactionDay.date}>
            <div className="transaction-date">
              <h3>{formatDayDate(_transactionDay.date)}</h3>
              <p>
                {TransactionsStrings.balanceTitle}{" "}
                <strong>R$ {_transactionDay.balance}</strong>
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
