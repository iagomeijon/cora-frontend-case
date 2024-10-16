import AppRoutes from './routes/routes';

import { AuthProvder } from './core/contexts/authContext/index';
import {  TransactionsProvder } from './core/contexts/transactionContext/index';

import "./App.css";

function App() {
  return (
    <main id="page">
      <AuthProvder>
          <TransactionsProvder>
              <AppRoutes />
          </TransactionsProvder>
      </AuthProvder>
    </main>
  );
}

export default App;
