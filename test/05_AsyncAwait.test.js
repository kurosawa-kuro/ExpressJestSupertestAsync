const request = require('supertest');
const app = require('../src/app')

const commonModule = require('../lib/commonModule');

describe('Test the root path', () => {
    beforeEach(() => {
        jest.setTimeout(30000);
    });

    test('It should response the GET method', async () => {
        const response = await request(app).get('/async');
        console.log("before await commonModule.sleep(6000)")
        await commonModule.sleep(6000);
        console.log("after await commonModule.sleep(6000)")
        expect(response.statusCode).toBe(200);
    });
})