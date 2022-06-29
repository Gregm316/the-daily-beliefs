//imports - router, and any model necessary
const router = require("express").Router();
const { Character, Post } = require("../../models");
const withAuth = require("../../utils/auth");

//Endpoint = "/api/characters"

//get / display ALL character (use findAll)
router.get("/", withAuth, )

//get route - display a certain character by id# (use findbyPk) (we would essentially use Post.findAll where character_id=character.id)

//post route - only be used if we allow the end user to creat a new character page for a marvel character that we did not hard code


//export router
module.exports = router;