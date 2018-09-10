const request = require('supertest');
const app = require('../app');

describe('api', () => {
  describe('"/api" routes', () => {
    it('should be able to resond with 2xx', done => {
      request(app)
        .get('/api/ping')
        .expect(200)
        .expect('Content-Type', /application\/json/, done);
    });

    it('should return 5xx if the configurator receives invalid data', done => {
      request(app)
        .post('/api/configurator/create')
        .send({})
        .expect(500, done);
    });

    it('should return json when creating a new configuration', done => {
      const postBody = {
        answers: { 0: '/build', 1: 'index.js', 2: '/dist', 3: 'bundle.js' }
      };
      request(app)
        .post('/api/configurator/create')
        .send(postBody)
        .set('Accept', 'application/json')
        .expect(200)
        .expect('Content-Type', /application\/json/, done);
    });
  });
});
