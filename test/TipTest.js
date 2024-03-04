const assert = require('assert');
const app = require('../Tip');
const request = require('supertest');

describe('API GET Request', () => {
  it('should return "Hello World"', (done) => {
    request(app)
      .get('/api/data')
      .end((err, res) => {
        if (err) return done(err);
        assert.strictEqual(res.status, 200);
        assert.strictEqual(res.body.message, 'Hello World');
        done();
      });
  });
});

