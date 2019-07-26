import dotenv from 'dotenv';
import userController from '../controllers/userController';
import validateSignup from '../middleware/validation';

dotenv.config();

const API_VERSION = '/api/v1';

const userRoute = (app) => {
  app.post(`${API_VERSION}/auth/signup`, validateSignup, userController.signup);
};

export default userRoute;
