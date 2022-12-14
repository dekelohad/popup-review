import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { ToastContainer } from 'react-toastify';
import * as ROUTES from './constants/routes';
import { COLORS } from './theme';
import { HomePage, ExplanationsPage, NotFoundPage } from './pages';
import GlobalStyle from './theme/GlobalStyle.style';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <Router>
      <ToastContainer />
      <ThemeProvider theme={{ colors: COLORS }}>
        <GlobalStyle />
        <Routes>
          <Route path={ROUTES.HOME} element={<HomePage />} />
          <Route path={ROUTES.EXPLANATIONS} element={<ExplanationsPage />} />
          <Route path={ROUTES.NOT_FOUND} element={<NotFoundPage />} />
        </Routes>
      </ThemeProvider>
    </Router >
  );
};

export default App;
