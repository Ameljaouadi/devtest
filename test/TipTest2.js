const assert = require('assert');
const app = require('../Tip2');
const request = require('supertest');

describe('API POST Request', () => {
  it('should return the posted data', (done) => {
    const postData = { name: 'John', age: 30 }; // Données à envoyer via POST

    request(app)
      .post('/api/data')
      .send(postData) // Envoyer les données POST
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/) // Définir le type de contenu attendu dans la réponse
      .end((err, res) => {
        if (err) return done(err);
        assert.strictEqual(res.status, 200);
        assert.deepStrictEqual(res.body, postData); // Vérifier si les données renvoyées sont identiques aux données envoyées
        done();
      });
  });
});

