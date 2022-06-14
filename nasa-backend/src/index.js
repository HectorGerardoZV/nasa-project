const http = require("http");
const app = require("./app");
require("dotenv").config({path:".env"});
const {loadPlanetsData} = require("./models/planets.model");

const PORT = process.env.PORT || 1234;
const HOST = process.env.HOST || "localhost";

const server = http.createServer(app);


const startServer = async()=>{
    await loadPlanetsData();
    server.listen(PORT, HOST,()=>{
        console.log(`Server running in ${HOST}:${PORT}`);
    })
    
}

startServer()
