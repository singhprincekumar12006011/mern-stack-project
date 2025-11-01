import express from 'express';
import { createUser, deleteUser, getAll, login } from '../controllers/userController.js';

const userRouter = express.Router();

userRouter.post('/signup', createUser);
userRouter.post('/login', login)
userRouter.get('/getall',getAll)
userRouter.delete('/delete/:id', deleteUser)

export default userRouter;