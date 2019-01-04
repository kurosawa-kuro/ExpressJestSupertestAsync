const request = require('supertest');
const app = require('../src/app')

describe('Test the root path', () => {
    beforeEach(() => {
        jest.setTimeout(10000);
    });
    
    test('It should response the GET method', async () => {
        const response = await request(app).get('/async');
        expect(response.statusCode).toBe(200);
    });
})