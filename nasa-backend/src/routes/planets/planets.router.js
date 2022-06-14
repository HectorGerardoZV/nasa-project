const express = require("express");
const planetsRouter = express.Router();

//Controller
const {getAllPlanets} = require("../../controller/planets/planets.controller");

//Routes
planetsRouter.get("/planets",getAllPlanets);

//Export
module.exports = planetsRouter;