//imports - router, and any model necessary
const router = require("express").Router();
const { Character, Post } = require("../../models");
const withAuth = require("../../utils/auth");
require('dotenv').config(); //import dotenv so we can hide API key

const imgElement = document.querySelector("#img-placeholder"); //added this if we want to update the character's thumbnail image into the character page being displayed
const bioElement = document.querySelector("#bio-placeholder"); //added this for same reason, update bio via API
const apiUrl = "https://gateway.marvel.com/v1/public/characters?name=hulk&ts=test&apikey="+ process.env.API_KEY +"&hash=c3ab47d4e62a9d8621a7777293aa85ee"

//Endpoint = "/api/characters"

//get / display ALL character (use findAll)
router.get("/", withAuth, async (req, res) => {
    try {
        const characterData = await Character.findAll({
            attributes: ["character_name"]
        });
        res.status(200).json(characterData); //displays all characterData - do we need to switch this to a res.render instead??
    } catch (err) {
        res.status(500).json(err);
    }
});

//get route - display a certain character by id# (use findbyPk) (we would essentially use Post.findAll where character_id=character.id)
// router.get("/:id", withAuth, async (req, res) => {
//     try {
//         const characterData = await Post.findAll({ // find all items in the Post table but...
//             where: {
//                 character_id: req.params.id // ...only return Posts where the id in the url matches the character_id column in the Post table
//             }
//         });
//         if (!characterData) {
//             res.status(404).json({ message: "No character by that ID number"});
//         }
//         res.status(200).json(characterData); //do we need to switch this to a res.render instead??
//     } catch (err) {
//         res.status(500).json(err);
//     }
// });


//duplicate the above get route - use Character.findByPk, and includ: [{ model: Post}] where: character_id = character.id
router.get("/:id", withAuth, async (req, res) => {
    try {
        //try to fetch the given character's URL (maybe as an external function)....
        fetch(apiUrl)
        .then(function(res){
            return res.json();
          })
          .then(function(data) {
            //then save the Bio and Thumbnail as variables...
            let thumbnailImg = data.data.results.thumbnail + ".jpg";
            let bio = data.data.results.description ;
            //Then use .innerhtml to render that content correct place in our webpage...
            imgElement.innerHTML(`<img src=${thumbnailImg}/>`)
            bioElement.innerHTML(bio);
          })

        //then continue to grab the rest of the normal process of querying data from our DB
        const characterData = await Character.findByPk(req.params.id, { // find the single character by the given id...
            include: [{ model: Post}] //join the Post table
        });
        if (!characterData) {
            res.status(404).json({ message: "No character by that ID number"});
        }
        res.status(200).json(characterData); //do we need to switch this to a res.render instead??
    } catch (err) {
        res.status(500).json(err);
    }
});

//include a post route the does creates a new post? instead of in post-routes?
router.post("/:id", withAuth, async (req, res) => {
    try {
        //POST route - create a new post with the character_id of whatever re.params.id is
        const newPost = await Post.create({
            message: req.body.message,
            character_id: req.params.id,
            user_id: req.body.user_id
        });
        //re-run query that finds all posts with the certain ID
        const characterData = await Character.findByPk(req.params.id, { // find the single character by the given id...
            include: [{ model: Post }] //join the Post table
        });
        if (!characterData) {
            res.status(404).json({ message: "No character by that ID number"});
        }
        //create array of all current posts (for that ID), then push the newPost to it
        // const posts = characterData.map((post) => post.get({ plain: true })); //recently commented this out since we change the function
        // characterData.push(newPost); // think this line is uncessary because it is async - when characterData is created here, it shoudl include the newPost just added to the table above
        res.status(200).json(characterData); //do we need to switch this to a res.render instead??
    } catch (err) {
        res.status(500).json(err);
    }
})


//post route - only be used if we allow the end user to creat a new character page for a marvel character that we did not hard code


//export router
module.exports = router;