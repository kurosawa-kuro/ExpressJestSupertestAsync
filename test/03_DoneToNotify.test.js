const request = require('supertest');
const app = require('../src/app')

describe('Test the root path', () => {
    beforeEach(() => {
        jest.setTimeout(10000);
    });
    
    test('It should response the GET method', (done) => {
        request(app).get('/async').then((response) => {
            expect(response.statusCode).toBe(200);
            done();
        });
    });
});