import axios from 'axios';

export default axios.create({
  baseURL: 'https://popup-review.herokuapp.com/api',
  responseType: 'json',
});
