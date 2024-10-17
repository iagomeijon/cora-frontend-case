import { ITransactionItem } from "../../../../core/hooks/useTransactions/interfaces";
import { formatCurrency, formatDateTime, getIcon } from "../utils";
import "../index.scss";

interface ITransactionItemProps {
  item: ITransactionItem;
}

function TransactionItem({ item }: ITransactionItemProps) {
  const valueClass = item.entry === "CREDIT" ? "entry" : "";

  return (
    <tr key={item.id} className="transaction-info">
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
}

export { TransactionItem };
