//import express.router()
const router = require("express").Router();

//define filepath for apiRoutes, homeRoutes, any other variable names
const apiRoutes = require("./api");
const homeRoutes = require("./home-routes");
//do we need to add one for chatroom?
// const chatRoutes = require("./chat-routes"); //uncomment this line if we have separate routes for chat

//router.use for "/", "/api", any others...
router.use("/", homeRoutes);
router.use("/api", apiRoutes);
// router.use("/chat", chatRoutes); //uncomment this if we have separate routes for chat

//export router
module.exports = router;