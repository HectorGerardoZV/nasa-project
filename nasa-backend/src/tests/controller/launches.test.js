const request = require("supertest");
const app = require("../../app");

describe('Testing launches controller', () => {
    test('should return a empty array', async() => {
        const response = await request(app)
        .get("/launches")
        .expect(200);

        const launches = response.body;
        expect(launches.length).toBe(0)
    });
    test("should add a new launche", async()=>{
        const newLaunch = {
            mission: "Super torro",
            launchDate: "January 4,2025",
            rocket: "Explorer IS1",
            target: "Kepler-62 f"
        }
        const response =  await request(app)
        .post("/launches")
        .send(newLaunch)
        .expect("Content-Type", /json/)
        .expect(200)

        const launch = response.body;
        const responseLaunch ={
            mission: 'Super torro',
            launchDate: launch.launchDate,
            rocket: 'Explorer IS1',
            target: 'Kepler-62 f',
            flightNumber: 101,
            customers: [ 'NASA', 'SPACEX', 'ZTM' ],
            upcoming: true,
            success: true
          }
        expect(launch).toEqual(responseLaunch);
        expect(launch.flightNumber).toBe(101);
        expect(launch.customers).toEqual(["NASA", "SPACEX", "ZTM"]);

    });
    test('should return "Al values are required" as a error message', async() => {
        const newLaunch = {
            missionn: "Super torro",
            launchDate: "January 4,2025",
            rocket: "Explorer IS1",
            target: "Kepler-62 f"
        }
        
        const response = await request(app)
            .post("/launches")
            .send(newLaunch)
            .expect(400)
        

        const {error} = JSON.parse(response.text)
        expect(error).toBe("Al values are required")        
    });
    test('should return "Invalid launch date" as a error message ', async() => {
        const newLaunch = {
            mission: "Super torro",
            launchDate: "Today is Today",
            rocket: "Explorer IS1",
            target: "Kepler-62 f"
        }
        
        const response = await request(app)
            .post("/launches")
            .send(newLaunch)
            .expect(400)
        

        const {error} = JSON.parse(response.text)
        expect(error).toBe("Invalid launch date")   
    });
    test('should delete an specific launch by id', async() => {

        const newLaunch = {
            mission: "Super torro",
            launchDate: "January 4,2025",
            rocket: "Explorer IS1",
            target: "Kepler-62 f"
        }
        await request(app)
        .post("/launches")
        .send(newLaunch)
        .expect("Content-Type", /json/)
        .expect(200)

        const response = await request(app)
        .delete("/launches/101")
        .expect(200)
        
    });
});