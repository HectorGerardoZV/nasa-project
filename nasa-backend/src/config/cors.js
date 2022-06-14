const cors = require("cors");
require("dotenv").config({path: ".env"});
const corsConfig = {
    origin: process.env.FRONT
}
module.exports = cors(corsConfig)