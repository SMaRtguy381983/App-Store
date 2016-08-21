const expect = require('chai').expect;
const request = require('supertest');
const utilityTool = require('loot-ytilitu');

const tstDataIgnored = {};

// Test for Multiple Users
// Test for a single user
const tests = [
  {
    titleForIt: 'Add a User',
    payload: {
      name: 'Shaun',
    },
    route: '/api/v1/users',
    method: 'POST',
    onSuccess: (res, done) => {
      this.tstDataIgnored = res.body;

      expect(res.body).to.have.property('id');
      expect(res.body).to.have.property('name');

      done();
    },
  },
  {
    titleForIt: 'Test for Multiple Users',
    route: '/api/v1/users',
    method: 'GET',
    onSuccess: (res, done) => {
      this.tstUser = res.body[0];

      expect(res.body.length).to.be.above(0);

      done();
    },
  },
];

describe('Routes', () => {
  let server;

  beforeEach(() => {
    server = require('../src/server');
  });

  afterEach(() => {
    server.close();
  });

  tests.forEach((test) => {
    it(`${test.method} ${test.route} ${test.titleForIt}`, (done) => {
      if (test.method === 'GET') {
        request(server)
        .get(test.route)
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            utilityTool.debug(err);
          } else {
            test.onSuccess(res, done);
          }
        });
      } else if (test.method === 'POST') {
        request(server)
        .post(test.route)
        .send(test.payload)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            utilityTool.debug(err);
          } else {
            test.onSuccess(res, done);
          }
        });
      }
    });
  });
});
