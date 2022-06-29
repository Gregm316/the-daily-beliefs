//import router
const router = require("express").Router();
//import any models needed....

//import withAUth helper func
const withAuth = require("../utils/auth");

//lay out the routes here - should have "/" and "/login"
router.get("/", withAuth, )

//export router
module.exports = router;