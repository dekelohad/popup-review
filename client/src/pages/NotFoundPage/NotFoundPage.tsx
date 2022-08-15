import { useNavigate } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import { NotFoundPageContainer, NotFoundPageButton } from './NotFoundPage.style';

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <NotFoundPageContainer>Page Not Found
      <NotFoundPageButton onClick={() => navigate(ROUTES.HOME)}>Go Back To Home Page</NotFoundPageButton>
    </NotFoundPageContainer>
  )

};

export default NotFound;