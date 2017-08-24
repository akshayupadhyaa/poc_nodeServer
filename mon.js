// grab the things we need
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var dataSchema = new Schema({
    sw1: { type: Boolean, required: true, unique: false },
    sw2: { type: Boolean, required: true, unique: false },
    time:{
        type:Number,
        unique:true,
        default:Date.now()
    }
    
    
});

// the schema is useless so far
// we need to create a model using it
var db = mongoose.model('analytics', dataSchema);

// make this available to our users in our Node applications
module.exports = db;