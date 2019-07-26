/**
 * @name signup
 * @description - register new user
 * @param {object} data
 * @returns the object query
*/
const signupUser = data => ({
  text: `INSERT INTO users (
    firstName,
    lastName,
    email,
    password
  ) VALUES ($1, $2, $3, $4) RETURNING *`,
  values: [data.firstName, data.lastName, data.email, data.password],
});

module.exports = {
  signupUser,
};
