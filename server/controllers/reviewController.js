const asyncHandler = require("express-async-handler");
require("dotenv").config();

/*
   @desc      Get all reviews.
   @route     GET /api/reviews
   @access    Public
*/

const getReviews = asyncHandler(async (req, res) => {
});

/*
   @desc      Create new reviews.
   @route     POST /api/reviews
   @access    Public
*/

const createReviews = asyncHandler(async (req, res) => {
});

/*
   @desc      Delete a  review.
   @route     DELETE /api/reviews/:id
   @access    Public
*/

const deleteReview = asyncHandler(async (req, res) => {
});


const deleteReviews = asyncHandler(async (req, res) => {
});

module.exports = {
  getReviews,
  createReviews,
  deleteReview,
  deleteReviews,
};
