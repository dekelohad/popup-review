import { useNavigate } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import { ExplanationsPageContainer, ExplanationsPageButton } from './ExplanationsPage.style';

const ExplanationsPage = () => {
  const navigate = useNavigate();
  return <ExplanationsPageContainer>Learn How To Add Reviews Page
    <ExplanationsPageButton onClick={() => navigate(ROUTES.HOME)}>Go Back To Home Page</ExplanationsPageButton>
  </ExplanationsPageContainer>
};

export default ExplanationsPage;
