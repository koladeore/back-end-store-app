import express from 'express';
import userRouter from './userRoutes';


const indexRouter = express.Router();
indexRouter.use('/auth', userRouter);

export default indexRouter;
