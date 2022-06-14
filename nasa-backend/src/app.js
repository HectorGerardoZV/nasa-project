const express = require("express");
const bodyParser = require("body-parser");
const cors = require("./config/cors");
const router = require("./routes/router.router");
const morgan = require("morgan");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors);

app.use(morgan("combined"))



app.use("/",router);

module.exports = app;