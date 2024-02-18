import express from 'express';

const userRouter = express.Router();
import {login, register, profile} from '../controllers/users.js';

userRouter.post('/login', login)
userRouter.post('/register', register)
userRouter.get('/profile/:id', profile)

export default userRouter;
