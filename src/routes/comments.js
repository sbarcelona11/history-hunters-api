import express from 'express';

const commentsRouter = express.Router();
import {
    getAllComments,
    getComment,
    getAllCommentForUser,
    addComment,
    updateComment,
    deleteComment
} from '../controllers/comments.js';

commentsRouter.get('/', getAllComments);
commentsRouter.get('/:id', getComment);
commentsRouter.get('/user/:userId', getAllCommentForUser);
commentsRouter.post('/add', addComment);
commentsRouter.put('/update/:id', updateComment);
commentsRouter.delete('/delete/:id', deleteComment);

export default commentsRouter;
