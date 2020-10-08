const router = require('express').Router();
const Controller = require('../controllers');

// category routes
router.get("/user/login", Controller.userLogin);
router.post("/user/signup", Controller.userSignUp);

module.exports = router;