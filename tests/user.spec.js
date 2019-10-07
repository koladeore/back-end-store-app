/* eslint-disable no-undef */
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import server from '../backend';

chai.use(chaiHttp);
const API_VERSION = '/api/v1';
const newUser = {
  email: 'kolade@gmail.com',
  firstName: 'kolade',
  password: 'password',
  lastName: 'oreh',
  confirmPassword: 'password',
};

describe('USER TEST', () => {
  describe('SIGN UP TEST', () => {
    it('should return user sign up', (done) => {
      chai.request(server)
        .post(`${API_VERSION}/auth/signup`)
        .send(newUser)
        .end((error, response) => {
          expect(response).to.have.status('201');
          expect(response.body).to.be.an('object');
          expect(response.body).to.haveOwnProperty('data');
          done();
        });
    });
  });
});
