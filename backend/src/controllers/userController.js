import moment from 'moment';
import pool from '../models/database';
import utils from '../helper/utils';
import { signupUser } from '../models/queries';

class UserController {
  /**
   * create new user
   * @param {object} request express request object
   * @param {object} response express response object
   *
   * @returns {json} json
   * @memberof UserController
   */

  static signup(request, response) {
    try {
      const {
        firstName, lastName, email, password, type,
      } = request.body;

      let userType = 'client';
      let adminType = false;

      if (type) {
        userType = type;
        if (userType === 'admin') {
          adminType = true;
          userType = 'staff';
        }
      }

      const data = {
        email,
        firstName,
        lastName,
        password: utils.hashPassword(password),
        registered: moment().format(),
        type: userType,
        isAdmin: adminType,
      };

      pool.connect((err, client, done) => {
        client.query(signupUser(data), (error, result) => {
          done();
          if (error) {
            if (error.code === '23505') {
              return response.status(400).json({
                status: 400,
                error: 'Email already exists',
              });
            }
          }

          const user = result.rows[0];
          console.log(result);
          const tokenData = {
            id: user.id,
            firstName: user.firstname,
            lastName: user.lastname,
            email: user.email,
            type: user.type,
            isAdmin: user.isadmin,
          };
          const token = utils.jwtToken(tokenData);
          const {
            firstname, lastname, id,
          } = user;

          return response.status(201).json({
            status: 201,
            data: [{
              token,
              id,
              firstName: firstname,
              lastName: lastname,
              email: user.email,
            }],
          });
        });
      });
    } catch (e) {
      return response.status(500).json({ status: 500, error: 'Server Error' });
    }
  }
}

export default UserController;
