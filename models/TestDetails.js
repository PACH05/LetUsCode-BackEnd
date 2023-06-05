const mongoose = require('mongoose');

const TestSchema = new mongoose.Schema({
    testID : {type : String, required : true, unique : true},
    questionTitle : {type : String, required : true},
    questionBody : {type : String, required : true},
    constraints : {type : String, required : true}, 
});

const model = mongoose.model("LUC-Test-Schema", TestSchema);
module.exports = model;

