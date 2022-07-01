//imports - router, and any model necessary
const router = require("express").Router();
const { User } = require("../../models");
const withAuth = require("../../utils/auth");

//Endpoint: "/api/users"

//get / display all users - endpoint: "/api/users/"
router.get("/", withAuth, async (req, res) => {
    // try catch, use findAll for User
    try{ 
        const userData = await User.findAll ({
            attributes: { exclude: ["password"]},
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
    try {
        const userData = await User.findByPk(req.params.id, {
            attributes: { exclude: ["password"]},
            order: [['last_name', 'ASC']],
        })
        //if no user with that ID, send error message
        if (!userData) {
            res.status(404).json({ message: "No user with that ID"});
            return;
        }
        res.status(200).json(userData); //do we need to switch this to a res.render instead??

    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
})

//create (POST) a new user
router.post("/", async (req, res) => {
    try {
        const userData = await User.create({
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            email: req.body.email,
            username: req.body.username,
            password: req.body.password
        });
        res.status(200).json(userData);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

//update a certain user


//delete a certain user

//export router
module.exports = router;