const express = require("express");
const launchesRouter = express();

//Controller
const {httpAddNewLaunche,httpGetAllLaunches,httpDeleteLaunche} = require("../../controller/launches/launches.controller");

launchesRouter.get("/launches",httpGetAllLaunches);
launchesRouter.post("/launches",httpAddNewLaunche);
launchesRouter.delete("/launches/:id",httpDeleteLaunche);


module.exports = launchesRouter;