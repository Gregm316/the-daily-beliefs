//import router
const router = require("express").Router();
//import any models needed....

//import withAUth helper func
const withAuth = require("../utils/auth");

//lay out the routes here - should have "/" and "/login"

//main "/" route
router.get("/", withAuth, async (req, res) => {
    //do we need to display any info fromt he tables (for logged in user)? I think we just want blank homepage
    //if we wanted to display, this is where we would do something like a Post.findAll(...)
    try {
        //render the homepage hamdlebars
        render("homepage", {
            logged_in: req.session.logged_in
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

//login route
router.get("/login", (req, res) => {
    //if the user is logged in, redirect to the homepage "/"...
    if (req.session.logged_in) {
        res.redirect("/");
        return;
    }
    //...if they are not logged in, then render the login handlebar
    res.render("login");
})

//export router
module.exports = router;