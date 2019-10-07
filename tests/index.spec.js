import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import server from '../backend';

chai.use(chaiHttp);

describe('WELCOME TEST', () => {
  it('should return api is working', (done) => {
    chai.request(server)
      .get('/')
      .end((error, response) => {
        expect(response).to.have.status('200');
        expect(response.text).to.equal('The API is working');
        done();
      });
  });
});
