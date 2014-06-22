var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next)  {
  var now = Date.now();
  for (var i = 0; i < 100000; i++) {
    res.write(now.toString());
    res.write("\n");
    now = now + 1;
  }
  res.end();
});

module.exports = router;
