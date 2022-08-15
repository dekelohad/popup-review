import API from "../../utils/API";
import { Review } from "../../models";

const getReviews = async () => {
  const response = await API.get('/reviews');
  return response.data.reviews;
};

const addReviews = async (reviews: Review[]) => {
  const response = await API.post('/reviews/', { reviews });
  return response.data.data;
};

const deleteReview = async (id: string) => {
  const response = await API.delete(`/reviews/${id}`);
  return response.data.reviews;
};

const deleteReviews = () => {
  const response = API.delete(`/reviews`);
  return response;
};

export { getReviews, addReviews, deleteReview, deleteReviews };


