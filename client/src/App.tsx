import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import * as ROUTES from './constants/routes';
import { HomePage, ExplanationsPage, NotFoundPage } from './pages';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <Router>
      <ToastContainer />
      <Routes>
        <Route path={ROUTES.HOME} element={<HomePage />} />
        <Route path={ROUTES.EXPLANATIONS} element={<ExplanationsPage />} />
        <Route path={ROUTES.NOT_FOUND} element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
};

export default App;
