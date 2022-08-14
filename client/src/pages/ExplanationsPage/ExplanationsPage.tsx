import { useNavigate } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import { ExplanationsPageContainer } from './ExplanationsPage.style';

const ExplanationsPage = () => {
  const navigate = useNavigate();
  return <ExplanationsPageContainer>Learn How To Add Reviews Page
    <button onClick={() => navigate(ROUTES.HOME)}>Go Back To Home Page</button>

  </ExplanationsPageContainer>
};

export default ExplanationsPage;
