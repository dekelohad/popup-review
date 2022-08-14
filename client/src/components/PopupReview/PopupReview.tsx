import { useNavigate } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { nanoid } from 'nanoid'
import { useCSVReader } from 'react-papaparse';
import { toast } from 'react-toastify';
import * as ROUTES from '../../constants/routes';
import { Review } from '../../models';
import { titles, texts } from '../../assets/generic-reviews';
import { getReviews, addReviews, deleteReview, deleteReviews } from "../../services/ReviewServices/ReviewServices";
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
  const { CSVReader } = useCSVReader();

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
    const newReviews = [];
    for (let i = 0; i < reviewsAmount; i++) {
      const title = titles[Math.floor(Math.random() * titles.length)];
      const content = texts[Math.floor(Math.random() * texts.length)];
      const review = {
        title: title,
        content: content,
        _id: nanoid(),
      };
      newReviews.push(review);
    }
    setReviews([...reviews, ...newReviews]);
  };


  const importOnUploadAccepted = (results: any) => {
    const newReviews = [];
    const reviewsImportedFromCSV = results.data;
    const totalReviewsToCreate = results.data.length - 1;
    for (let i = 0; i < totalReviewsToCreate; i++) {
      const title = reviewsImportedFromCSV[i][0];
      const content = reviewsImportedFromCSV[i][1];
      const review = {
        title: title,
        content: content,
        _id: nanoid(),
      };
      newReviews.push(review);
    }
    setReviews([...reviews, ...newReviews]);
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
                <CSVReader
                  onUploadAccepted={(results: any) => importOnUploadAccepted(results)}
                >
                  {({
                    getRootProps,
                    ProgressBar,
                  }: any) => (
                    <>
                      <InstructionsButton {...getRootProps()}>
                        <InstructionsButtonInnerContainer>
                          <ImportIcon />
                          Import from file
                        </InstructionsButtonInnerContainer>
                        <RightArrowIcon />
                      </InstructionsButton>
                      <ProgressBar />
                    </>
                  )}
                </CSVReader>
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
