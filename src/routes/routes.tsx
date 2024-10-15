import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Todo from '../pages/Todo'; 
import Home from '../pages/Home';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/todo" element={<Todo />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;