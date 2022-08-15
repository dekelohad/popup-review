const asyncHandler = require("express-async-handler");
const logger = require("../pino-logging/logger");
const Review = require("../models/review");
require("dotenv").config();

/*
   @desc      Get all reviews.
   @route     GET /api/reviews
   @access    Public
*/

const getReviews = asyncHandler(async (req, res) => {
  const reviews = await Review.find({});
  if (reviews) {
    logger.info(`reviews, ${reviews} found successfully.`);
    res.status(200).json({
      reviews: reviews,
    });
  } else {
    logger.error(`Error Occurred while getting reviews`);
    res.status(400);
    throw new Error("Error Occurred while getting reviews");
  }
});

/*
   @desc      Create new reviews.
   @route     POST /api/reviews
   @access    Public
*/

const createReviews = asyncHandler(async (req, res) => {
  const { reviews } = req.body
  let newReviews = [];
  for (let i = 0; i < reviews.length; i++) {
    const review = await Review.create({
      title: reviews[i].title,
      content: reviews[i].content,
    });
    newReviews.push(review);
  }
  res.status(201).json({
    data: newReviews,
  });
});

/*
   @desc      Delete a  review.
   @route     DELETE /api/reviews/:id
   @access    Public
*/

const deleteReview = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const review = await Review.findByIdAndDelete(id);

  if (!review) {
    logger.error(`${review}, review not found`);
    res.status(401);
    throw new Error("Review not found");
  } else {
    logger.info(`${review} review deleted successfully`);
    res.status(201).json({
      data: review,
    });
  }
});

const deleteReviews = asyncHandler(async (req, res) => {
  const reviews = await Review.deleteMany({});
  if (reviews) {
    logger.info(`${reviews} reviews deleted successfully`);
    res.status(200).json({
      data: reviews,
    });
  }
  else {
    logger.error(`Error Occurred while deleting reviews`);
    res.status(400);
    throw new Error("Error Occurred while deleting reviews");
  }
});

module.exports = {
  getReviews,
  createReviews,
  deleteReview,
  deleteReviews,
};
