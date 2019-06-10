require('dotenv').config();
const request = require('supertest');
const mongoose = require('mongoose');
const connect = require('../lib/utils/connect');
const app = require('../lib/app');

describe('Notes Routes', () => {
  beforeAll(() => {
    return connect();
  }); 

  beforeEach(() => {
    return mongoose.connection.dropDatabase();
  });

  afterAll(() => {
    return mongoose.connection.close();
  });

  it('POST method', () => {
    return request(app)
      .post('/api/v1/notes')
      .send({ title: 'Title', body: 'Body' })
      .then(res => {
        expect(res.body).toEqual({
          __v: 0,
          _id: expect.any(String),
          title: 'Title',
          body: 'Body'
        });
      });
  });
});
