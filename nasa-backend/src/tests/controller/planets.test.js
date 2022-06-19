const req = require("supertest");
const app = require("../../app");

describe('Testing planetsController', () => {
    test('should return the planets', async() => {
        const res = await req(app)
            .get("/planets")
            .expect(200)

        const {body} = res;
        expect(body.length).toBe(0)
    });
});