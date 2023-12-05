var user = require('./user-model');
var router = require('express').Router();
const auth = require("../auth/auth");

router.get('/user',auth,user.getAllUserInfos);
router.get('/user/:id',user.getUserDataFromId);
router.post('/user/reg',user.regUser);
router.post('/user/:id/address',user.createNewAddress);

module.exports = router