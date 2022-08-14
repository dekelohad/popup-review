import { useState, useEffect } from 'react';
import useFetch from '../../hooks/useFetch';
import { Review } from '../../models';
import { PopupReview } from '../../components';
import { ShowHidePopupButton } from "./HomePage.style";

const BASE_URL = 'https://popup-review.herokuapp.com/';

const HomePage = () => {
  const [showPopup, setShowPopup] = useState<boolean>(true);
  const [showHidePopupButtonText, setShowHidePopupButtonText] = useState<string>('Hide Popup');
  const { data, loading } = useFetch(`${BASE_URL}/reviews`);
  const [reviews, setReviews] = useState<Review[]>([]);

  useEffect(() => {
    setShowHidePopupButtonText(showPopup ? 'Hide Popup' : 'Show Popup');
  }, [showPopup]);

  useEffect(() => {
    data && setReviews(data.reviews);
  }, [data])

  return (
    <>
      <ShowHidePopupButton onClick={() => setShowPopup(!showPopup)}>{showHidePopupButtonText}</ShowHidePopupButton>
      <PopupReview loading={loading} showPopup={showPopup} setShowPopup={() => setShowPopup(!showPopup)} reviews={reviews} setReviews={setReviews} Content={' Write the texts our accounts will use when reviewing your app on the App Store (Minimum 50 reviews).'} />
    </>
  )

};

export default HomePage;
