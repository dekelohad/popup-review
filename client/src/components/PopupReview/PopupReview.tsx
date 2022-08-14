import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Review } from '../../models';
import { ReviewCommentBar } from '../../components';
import {
  Container,
  PreviewAreaAndCommentBarContainer,
  ContentContainer,
} from './PopupReview.style';

interface PopupReviewProps {
  showPopup: boolean;
  setShowPopup: (showPopup: boolean) => void;
  reviews: Review[];
  setReviews: (reviews: Review[]) => void;
  Content: any;
  loading: boolean;
};

const PopupReview = ({ showPopup, setShowPopup, reviews, setReviews, Content }: PopupReviewProps) => {
  return (
    <HelmetProvider>
      <Helmet bodyAttributes={{ style: 'background: #C4D2DC' }} />
      {
        showPopup ? (
          <Container>
            <PreviewAreaAndCommentBarContainer>
              <ReviewCommentBar reviews={reviews} setReviews={setReviews} maxCharLength={255} />
              <ContentContainer>
                {Content}
              </ContentContainer>
            </PreviewAreaAndCommentBarContainer>
          </Container>
        ) : null
      }
    </HelmetProvider>

  );
};

export default PopupReview;
