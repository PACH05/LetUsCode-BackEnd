const express = require('express');
const route = express.Router();
const mongoose = require("mongoose");

const dbLink = process.env.DBLINK;

mongoose.connect(dbLink)
  .then(() => console.log("Database connection successful"))
  .catch((err) => console.log(err));

const TestRoute = require("./routes/Test")
const createTest = require("./routes/CreateTest")

route.use("/test", TestRoute);
route.use("/createtest", createTest);

module.exports = route;

