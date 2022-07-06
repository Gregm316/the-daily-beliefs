console.log("character.js");

fetch("/api/characters/")
.then((status) => {
    if(status.ok) {
        status.json();
    }
})
.then((data) => {
    console.log("Data: ", data);
    
})

// My attempt to make marvel API work here
const characterName = 'hulk'; // hardcoding for now to ensure api works

const apiUrl = "https://gateway.marvel.com/v1/public/characters?name="+ characterName +"&ts=test&apikey="+ process.env.API_KEY +"&hash=bf87806abd3d8c926aa52d5042ac4a42";



function getCharacterInfo() {
    fetch(apiUrl)
}