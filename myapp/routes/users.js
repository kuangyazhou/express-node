var express = require('express');
var router = express.Router();


// 路由模块 访问http://localhost:3000/users
/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});

module.exports = router;