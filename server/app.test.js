const request = require('supertest');
const app = require('./app');

describe('app', () => {
  describe('"/" route', () => {
    it('should respond to a basic GET request', done => {
      request(app)
        .get('/')
        .expect(200)
        .expect('Content-Type', /text\/html/, done);
    });
  });
});
