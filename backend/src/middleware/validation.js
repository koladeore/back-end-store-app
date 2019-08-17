import Schema from './schemas';

const Validations = {
  validateSignup(request, response, next) {
    try {
      const {
        firstName, lastName, email, password, confirmPassword,
      } = request.body;

      const userDetails = {
        firstName, lastName, email, password, confirmPassword,
      };
      const result = Schema.createUserSchema(userDetails);

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
  },
  validateSignin(request, response, next) {
    try {
      const { email, password } = request.body;

      const userDetails = {
        email, password,
      };
      const result = Schema.loginUserSchema(userDetails);

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
  },
};

module.exports = Validations;
