import "./index.css";
import entryIcon from "../../../assets/svg/entry.svg";
import reversalIcon from "../../../assets/svg/reversal.svg";

function TransactionList() {
  return (
    <main id="extract">
      {/* Debit/Credit Filters */}
      <section className="filters">
        <button className="filter active">Débito</button>
        <button className="filter">Crédito</button>
      </section>

      {/* List of Transactions */}
      <section>
        {/* Date and daily balance */}
        <div className="transaction-date">
          <h3>29 de Setembro</h3>
          <p>
            saldo do dia <strong>R$ 3.780,08</strong>
          </p>
        </div>

        <div className="divider"/>
        <table className="transaction-card">
          <tbody>
            <tr className="transaction-info">
              <td className="transaction-name entry">
                <img src={entryIcon} alt="entryIcon" title="entryIcon" />
              </td>
              <td className="transaction-name entry">Supermercado Ana Rosa</td>
              <td className="transaction-description">Recebimentos por Pix ou TED</td>
              <td className="transaction-date">20 Set 2024 - 10:26</td>
              <td className="transaction-value entry">+ R$ 1.320.890,87</td>
            </tr>

            <tr className="transaction-info">
              <td className="transaction-name entry">
                <img src={reversalIcon} alt="reversalIcon" title="reversalIcon" />
              </td>
              <td className="transaction-name">Supermercado Ana Rosa</td>
              <td className="transaction-description">Estornos</td>
              <td className="transaction-date">20 Set 2024 - 10:26</td>
              <td className="transaction-value reversal">- R$ 1.320.890,87</td>
            </tr>
          </tbody>
        </table>
        <div className="divider"/>
      </section>
      <section>
        {/* Date and daily balance */}
        <div className="transaction-date">
          <h3>29 de Setembro</h3>
          <p>
            saldo do dia <strong>R$ 3.780,08</strong>
          </p>
        </div>

        <div className="divider"/>
        <table className="transaction-card">
          <tbody>
            <tr className="transaction-info">
              <td className="transaction-name entry">
                <img src={entryIcon} alt="entryIcon" title="entryIcon" />
              </td>
              <td className="transaction-name entry">Supermercado Ana Rosa</td>
              <td className="transaction-description">Recebimentos por Pix ou TED</td>
              <td className="transaction-date">20 Set 2024 - 10:26</td>
              <td className="transaction-value entry">+ R$ 1.320.890,87</td>
            </tr>

            <tr className="transaction-info">
              <td className="transaction-name entry">
                <img src={reversalIcon} alt="reversalIcon" title="reversalIcon" />
              </td>
              <td className="transaction-name">Supermercado Ana Rosa</td>
              <td className="transaction-description">Estornos</td>
              <td className="transaction-date">20 Set 2024 - 10:26</td>
              <td className="transaction-value reversal">- R$ 1.320.890,87</td>
            </tr>
          </tbody>
        </table>
        <div className="divider"/>
      </section>
    </main>
  );
}

export { TransactionList };
