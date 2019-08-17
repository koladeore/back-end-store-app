import dotenv from 'dotenv';
import express from 'express';
import userController from '../controllers/userController';
import Validations from '../middleware/validation';

dotenv.config();

const userRouter = express.Router();
const { validateSignin, validateSignup } = Validations;
const { signup, signin } = userController;

userRouter.post('/signup', validateSignup, signup);
userRouter.post('/signin', validateSignin, signin);

export default userRouter;
