// grab the things we need
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var dataSchema = new Schema({
    temp: { type: Number, required: true, unique: false },
    time: {
        type: Number,
        unique: true,
        default: Date.now()
    }


});

// the schema is useless so far
// we need to create a model using it
var db = mongoose.model('temparature', dataSchema);

// make this available to our users in our Node applications
module.exports = db;