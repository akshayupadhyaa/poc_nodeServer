var express = require('express');
var router = express.Router();
let cors = require('cors');
let promiseMiddleware = require('express-promise-middleware');
let datai = require('../mon')
router.use(cors())
let sw = {};
sw.switch1 = false;
sw.switch2 = false;
/* GET users listing. */
//let getTopVal= ()=>{
//    datai.find().sort({ "time": -1 }).limit(1)
//    .exec((err,result)=>{
//        console.log(result)
//    })
//}

router.get('/', function (req, res, next) {
    res.json(sw)
});

router.get('/:id', (req, res, next) => {
    let toggle = req.params.id;
    toggle = Number(toggle);
    (toggle == 1) ? (sw.switch1 = !sw.switch1) : (sw.switch2 = !sw.switch2);
    //mapping data to schema
    let dpush = new datai();
    dpush.switch1 = sw.switch1;
    dpush.switch2 = sw.switch2;
    dpush.time= Date.now();
    //saving data  to db
    dpush.save(function (err,data) {
        if (err){console.log(err)};
        
        console.log('data saved!!');
    });
    res.json(sw);
});
module.exports = router;
