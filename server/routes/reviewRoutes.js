const express = require("express");
const router = express.Router();

const {
    getReviews,
    createReviews,
    deleteReview,
    deleteReviews,
} = require("../controllers/reviewController");

router.get("/", getReviews);
router.post("/", createReviews);
router.delete("/:id", deleteReview);
router.delete("/", deleteReviews);

module.exports = router;
