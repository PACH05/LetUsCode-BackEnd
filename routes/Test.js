const express = require("express");
const Test = require("../models/TestDetails");
const route = express.Router();

route.post("/", async (req, res) => {
  try {
    const {testID} = req.body;
    
    console.log(testID);

    const test = await Test.findOne({testID}).lean();

    console.log(test);
    if(!test){
        res.json({
            message : "invalid-test-id"
          }).status(404);
    }
    else{
    res.json({ 
      message : "test-found",
      question:  test}).status(200);
  }
} catch(e) {
    console.log(e);
  }
});
module.exports = route;

