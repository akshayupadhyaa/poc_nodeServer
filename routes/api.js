var express = require('express');
var router = express.Router();
let sw = {};
sw.switch1 = false;
sw.switch2 = false;
/* GET users listing. */
router.get('/', function (req, res, next) {
    res.json(sw);
});

router.get('/:id', (req, res, next) => {
    let toggle = req.params.id;
    toggle = Number(toggle);
    (toggle == 1) ? (sw.switch1 = !sw.switch1) : (sw.switch2 = !sw.switch2);
    res.send("switch " + toggle)
});
module.exports = router;
