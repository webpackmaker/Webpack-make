const request = require('supertest');
const app = require('../app');

describe('auth', () => {
  describe('"/auth" routes', () => {
    it('should provide a standard response', done => {
      request(app)
        .get('/auth/ping')
        .expect(200)
        .expect('Content-Type', /application\/json/, done);
    });

    it('should set a cookie', done => {
      const agent = request.agent(app);

      agent
        .get('/auth/set')
        .expect(204)
        .expect('set-cookie', /wbpk-cookie/, done);
    });
  });
});
