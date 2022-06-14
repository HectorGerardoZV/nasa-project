const express = require("express");
const router = express();

//Routes
router.use(require("./planets/planets.router"));
router.use(require("./launches/launches.router"));


module.exports = router;