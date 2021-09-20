process.env.NODE_ENV = 'test';

const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../server');
const should = chai.should();

chai.use(chaiHttp);

describe('Phonewords API Tests', () => {
  describe('Test route', () => {
    it('Test API example', done => {
      chai
        .request(server)
        .get('/api/v1')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.have.all.keys('phonewords example');
          done();
        });
    });
  });
  describe('Test validation', () => {
    it('Test for a valid number result length', done => {
      chai
        .request(server)
        .get('/api/v1/phonewords/43')
        .end((err, res) => {
          res.should.have.status(200);

          res.body.should.have.all.keys('success', 'phonewords', 'error');
          res.body.should.have.property('success').to.equal(true);
          res.body.should.have.property('error').to.equal('');
          res.body.should.have.property('phonewords').to.have.lengthOf(9);
          done();
        });
    });
    it('Test for a valid number result words', done => {
      const words = [
        'MID',
        'NID',
        'OID',
        'MHD',
        'NHD',
        'OHD',
        'MGD',
        'NGD',
        'OGD',
        'MIE',
        'NIE',
        'OIE',
        'MHE',
        'NHE',
        'OHE',
        'MGE',
        'NGE',
        'OGE',
        'MIF',
        'NIF',
        'OIF',
        'MHF',
        'NHF',
        'OHF',
        'MGF',
        'NGF',
        'OGF'
      ];

      chai
        .request(server)
        .get('/api/v1/phonewords/643')
        .end((err, res) => {
          res.should.have.status(200);

          res.body.should.have.all.keys('success', 'phonewords', 'error');
          res.body.should.have.property('success').to.equal(true);
          res.body.should.have.property('error').to.equal('');
          res.body.should.have.property('phonewords').to.have.lengthOf(27);
          res.body.should.have.property('phonewords').to.eql(words);
          done();
        });
    });
  });
});
