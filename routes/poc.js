var express = require('express');
var router = express.Router();
let cors = require('cors');
let tempDB = require('../Schemas/temp');
router.use(cors())
router.get('/',(req,res,next)=>{
    res.send("poc route");
})
router.get('/temp/:val',(req,res,next)=>{
    let temp = req.params.val;
    temp = Number(temp);
    let dpush = new tempDB();
    dpush.temp=temp;
    dpush.time = Date.now();
    
    //saving data  to db
    dpush.save(function (err, data) {
        if (err) { console.log(err) };

        console.log('data saved!!');
    });
    res.send("Success {temp:"+temp+"}");
})
module.exports = router;