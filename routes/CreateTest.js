const express = require('express');
const Test = require("../models/TestDetails");
const route = express.Router();

route.post("/", async(req, res)=>{
    const{testID, questionTitle, questionBody, constraints} = req.body;

    try{
    if (!testID || !questionTitle || !questionBody || !constraints) {
        res.status(421).json({
          status: "missing-information",
          message: "Fields cannot be blank",
        });
        return;
      }
    const temp = await Test.findOne({testID}).lean();

    if(!temp){
        const response = await Test.create({
            testID,
            questionTitle,
            questionBody,
            constraints,
          });
          console.log("Test Created");
        res.json({message : "Test created succesfully"}).status(200);
    }
    else{
        res.json({message : "TestID already exists"}).status(501);
    }
    } catch (error) {
        res.json(error).status(400);
      }
});

module.exports = route;