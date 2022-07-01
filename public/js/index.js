//imports
const router = require("express").Router();
const path = require("path");
const { Character, Post } = require("../../models");

//purpose of this tile is to try to redirect the user to the appropriate character page, based on their selection from the drop down...

let dropdown = document.querySelector("#character-selection");

const selectedChar = dropdown.value();
const getStartedBtn = document.querySelector("#get-started");


getStartedBtn.addEventListener("click", routeCreator);


function routeCreator(selectedChar) {
    let charId;
    //process that will retrieve the ID number based on selectedChar text
    async (req, res) => {
        try {
            charId = await Character.findOne({
                attributes: {id},
                where: {
                    character_name: selectedChar //where the character name matches character anme from table
                }
            });
            //then change the location to new URL
            location.href = `http://localhost:3001/characters/${chardId}` //not sure if this is correct
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    }


};