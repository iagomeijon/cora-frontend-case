import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PrivateRoute from './privateRoute'; 
import Todo from '../pages/Todo';
import { IBanking } from '../pages/IBanking'; 
import Home from '../pages/Home';
import {TransactionList} from '../pages/IBanking/TransactionsList';


const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todo" element={<Todo />} />
        <Route path="/login" element={<IBanking />} />
        <Route
          path="/transactions"
          element={
            <PrivateRoute>
              <TransactionList />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
};

export default AppRoutes;