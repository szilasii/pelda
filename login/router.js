const login = require("../login/login_model")
router = require("express").Router()

router.post("/login", login.signin)

module.exports = router