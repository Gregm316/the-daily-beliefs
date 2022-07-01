//import router
const router = require("express").Router();
//define paths for routes.js files
const characterRoutes = require("./character-routes");
const userRoutes = require("./user-routes");
// const postRoutes = require("./post-routes"); // uncomment when/if we add post-routes.js

//router.uses...
router.use("/characters", characterRoutes);
router.use("/users", userRoutes);
// router.use("/posts", postRoutes); // uncomment if we create post-routes.js



//export router
module.exports = router;