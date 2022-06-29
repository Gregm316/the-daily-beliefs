//imports - router, and any model necessary
const router = require("express").Router();
const { User } = require("../../models");

//Endpoint: "/api/users"

//get / display all users - endpoint: "/api/users/"
router.get("/", async (req, res) => {
    // try catch, use findAll for User
    try{ 
        const userData = await User.findAll ({
            attributes: { exclude: ["password"]},
            order: [['name', 'ASC']],
        });
    } catch (err) {
        res.status(500).json(err);
    }
});


//get / display a certain user
router.get("/:id", async (req, res) => {
    try {
        const userData = await User.findByPk(req.params.id, {
            attributes: { exclude: ["password"]},
            order: [['name', 'ASC']],
        })
    } catch (err) {
        res.status(500).json(err);
    }
})

//update a certain user


//delete a certain user