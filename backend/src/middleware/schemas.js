import Joi from 'joi';

const name = Joi.string().min(4).required();
const email = Joi.string().min(4).email({ minDomainSegments: 2 }).required();
const password = Joi.string().min(4).lowercase().required();
const confirmPassword = Joi.any().valid(Joi.ref('password')).required().options({ language: { any: { allowOnly: 'must match password' } } });

const createUserSchema = (data) => {
  const schema = {
    firstName: name,
    lastName: name,
    email,
    password,
    confirmPassword,
  };
  return Joi.validate(data, schema);
};

export default createUserSchema;
