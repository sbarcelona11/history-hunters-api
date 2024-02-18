import express from 'express';

const reviewRouter = express.Router();
import {
    getAllReviews,
    getReview,
    getAllReviewForUser,
    addReview,
    updateReview,
    deleteReview
} from '../controllers/reviews';

reviewRouter.get('/', getAllReviews);
reviewRouter.get('/:id', getReview);
reviewRouter.get('/user/:userId', getAllReviewForUser);
reviewRouter.post('/add', addReview);
reviewRouter.put('/update/:id', updateReview);
reviewRouter.delete('/delete/:id', deleteReview);

export default reviewRouter;
