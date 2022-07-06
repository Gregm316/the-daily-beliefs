//imports - router, and any model necessary
const router = require("express").Router();
const path = require("path");
const { User } = require("../../models");
const withAuth = require("../../utils/auth");

//Endpoint: "/api/users"

//get / display all users - endpoint: "/api/users/"
router.get("/", withAuth, async (req, res) => {
    console.log("GET request on /api/users");
    // try catch, use findAll for User
    try {
        const userData = await User.findAll({
            attributes: { exclude: ["password"] },
            order: [['last_name', 'ASC']],
        });
        res.status(200).json(userData); //do we need to switch this to a res.render instead??
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});


//get / display a certain user
router.get("/:id", withAuth, async (req, res) => {
    console.log("GET request on /api/users/:id");
    try {
        const userData = await User.findByPk(req.params.id, {
            attributes: { exclude: ["password"] },
            order: [['last_name', 'ASC']],
        })
        //if no user with that ID, send error message
        if (!userData) {
            res.status(404).json({ message: "No user with that ID" });
            return;
        }
        res.status(200).json(userData); //do we need to switch this to a res.render instead??

    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
})

//create (POST) a new user
router.post("/signup", async (req, res) => {
    console.log("POST request on /api/users");
    try {
        const userData = await User.create({
            email: req.body.email,
            username: req.body.username,
            password: req.body.password
        });

        req.session.save(() => {
            req.session.logged_in = true;

            res.status(200).json(userData);
        });

        // res.status(200).json(userData);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

//sign in
router.post('/login', async (req, res) => {
    console.log("POST /api/users/login");
    try {
        const dbUserData = await User.findOne({
            where: {
                email: req.body.email,
            },
        });

        if (!dbUserData) {
            res
                .status(400)
                .json({ message: 'Incorrect email or password. Please try again!' });
            return;
        }

        const validPassword = await dbUserData.checkPassword(req.body.password);

        if (!validPassword) {
            res
                .status(400)
                .json({ message: 'Incorrect email or password. Please try again!' });
            return;
        }

        req.session.save(() => {
            req.session.logged_in = true;
            req.session.username = dbUserData.username;
            console.log(
                '🚀 ~ file: user-routes.js ~ line 57 ~ req.session.save ~ req.session.cookie',
                req.session.cookie
            );

            res
                .status(200)
                .json({ user: dbUserData, message: 'You are now logged in!' });
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});


//export router
module.exports = router;