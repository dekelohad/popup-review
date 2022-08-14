import { useNavigate } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { toast } from 'react-toastify';
import { addReviews, deleteReview, deleteReviews } from '../../services/ReviewServices/ReviewServices';
import * as ROUTES from '../../constants/routes';
import { Review } from '../../models';
import { titles, texts } from '../../assets/generic-reviews';
import { Loader, ReviewCommentBar, ReviewBubble } from '../../components';
import {

  Container,
  CloseIcon,
  PreviewAreaAndCommentBarContainer,
  InstructionsContainer,
  Title,
  ReviewsPopupTitleNumber,
  ContentContainer,
  InstructionsButton,
  InstructionsButtonInnerContainer,
  RightArrowIcon,
  ImportIcon,
  InfoIcon,
  AddIcon,
  NoReviewsContainer,
  NoReviewsButton,
  ClearReviewsButton,
  ClearReviewsIcon,
  Separator,
  SaveButton,
} from './PopupReview.style';

interface PopupReviewProps {
  showPopup: boolean;
  setShowPopup: (showPopup: boolean) => void;
  reviews: Review[];
  setReviews: (reviews: Review[]) => void;
  Content: any;
  loading: boolean;
};

const PopupReview = ({ loading, showPopup, setShowPopup, reviews, setReviews, Content }: PopupReviewProps) => {
  const navigate = useNavigate();


  const handleDeleteReview = async (id: string) => {
    const newReviews = reviews.filter(review => review._id !== id);
    setReviews(newReviews);
    deleteReview(id);
  };

  const handleClearAllReviews = async () => {
    setReviews([]);
    await deleteReviews();
  };

  const createGenericReviews = (reviewsAmount: number) => {
  };


  const importOnUploadAccepted = (results: any) => {
  }

  const handleSaveReviews = async () => {
    addReviews(reviews);
    toast.success('The Reviews Saved Successfully', {
      position: 'bottom-center',
      style: {
        fontSize: '3rem',
      }
    });
  };

  return (
    <>
      <HelmetProvider>
        <Helmet bodyAttributes={{ style: 'background: #C4D2DC' }} />
        {
          showPopup ? (
            <Container>
              <PreviewAreaAndCommentBarContainer>
                <ReviewCommentBar reviews={reviews} setReviews={setReviews} maxCharLength={255} />
                {reviews?.length > 0 && !loading ? (
                  reviews.map((review: Review) => (
                    <ReviewBubble key={review._id} {...review} onClick={() => handleDeleteReview(review._id)} />
                  ))
                ) : loading ? <Loader />
                  : (
                    <NoReviewsContainer>
                      No reviews added yet.
                      <NoReviewsButton onClick={() => navigate(ROUTES.EXPLANATIONS)}>
                        Learn how to add reviews
                      </NoReviewsButton>
                    </NoReviewsContainer>
                  )}
              </PreviewAreaAndCommentBarContainer>
              <InstructionsContainer>
                <CloseIcon onClick={() => setShowPopup(!showPopup)} />
                <Title>
                  <ReviewsPopupTitleNumber>{reviews?.length || 0}</ReviewsPopupTitleNumber> app reviews
                </Title>
                <ContentContainer>
                  {Content}
                </ContentContainer>
                <InstructionsButton onClick={() => navigate(ROUTES.EXPLANATIONS)}>
                  <InstructionsButtonInnerContainer>
                    <InfoIcon />
                    Learn how to add reviews
                  </InstructionsButtonInnerContainer>
                  <RightArrowIcon />
                </InstructionsButton>
                <InstructionsButton onClick={() => createGenericReviews(10)}>
                  <InstructionsButtonInnerContainer>
                    <AddIcon />
                    +10 generic Reviews
                  </InstructionsButtonInnerContainer>
                  <RightArrowIcon />
                </InstructionsButton>

                <ClearReviewsButton disabled={reviews?.length === 0} onClick={handleClearAllReviews}>
                  <ClearReviewsIcon />
                  Clear All Reviews
                </ClearReviewsButton>
                <Separator />
                <SaveButton disabled={reviews?.length === 0} onClick={handleSaveReviews}>
                  Save
                </SaveButton>
              </InstructionsContainer>
            </Container>
          ) : ''
        }
      </HelmetProvider>
    </>
  );
};

export default PopupReview;
