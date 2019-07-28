import createUserSchema from './schemas';

const validateSignup = (request, response, next) => {
  try {
    const {
      firstName, lastName, email, password, confirmPassword,
    } = request.body;

    const userDetails = {
      firstName, lastName, email, password, confirmPassword,
    };
    const result = createUserSchema(userDetails);

    if (result.error) {
      const errorMessage = result.error.details[0].message;

      return response.status(400).json({
        error: errorMessage.replace(/[^a-zA-Z ]/g, ''),
      });
    }
    next();
  } catch (e) {
    return response.status(400).json({
      error: 'Missing required parameters',
    });
  }
};

export default validateSignup;
