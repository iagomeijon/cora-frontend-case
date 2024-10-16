import AppRoutes from './routes/routes';

import { AuthProvder } from './core/contexts/authContext/index';

import "./App.css";

function App() {
  return (
    <main id="page">
      <AuthProvder>
          <AppRoutes />
      </AuthProvder>
    </main>
  );
}

export default App;
