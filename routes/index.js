var express = require('express');
var router = express.Router();
var user = require('../controller/usercontroller');

router.post('/Register',user.register);
router.login('/Login',user.login);


module.exports = router;
