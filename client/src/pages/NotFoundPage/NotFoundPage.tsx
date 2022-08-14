import { useNavigate } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import { NotFoundPageContainer } from './NotFoundPage.style';

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <NotFoundPageContainer>Page Not Found
      <button onClick={() => navigate(ROUTES.HOME)}>Go Back To Home Page</button>
    </NotFoundPageContainer>
  )

};

export default NotFound;
