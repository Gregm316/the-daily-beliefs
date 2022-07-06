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
const nameSpot = document.getElementById('character-name');
const descriptionSpot = document.getElementById('character-description');
const image = document.getElementById('character-image');

// NEED TO SOMEHOW GET SELECTED CHARACTER
const characterName = 'iron%20man'; // hardcoding for now to ensure api works

const apiUrl = "https://gateway.marvel.com/v1/public/characters?name="+ characterName +"&ts=test&apikey="+ "ba472da2d16415fde113b35fbddfc3a3&hash=bf87806abd3d8c926aa52d5042ac4a42";

getCharacterInfo();

function getCharacterInfo() {
    fetch(apiUrl)
    .then(function (res) {
        return res.json();
    })
    .then(function(data){
        var name = data.data.results[0].name;
        var description = data.data.results[0].description;
        var thumbnailPath = data.data.results[0].thumbnail.path;

        showInfo(name, description, thumbnailPath);
    })
}

function showInfo(name, description, thumbnailPath) {
    nameSpot.innerHTML = name;
    descriptionSpot.innerHTML = description;

    console.log(thumbnailPath);

    const source = thumbnailPath + '/' + 'landscape_incredible.jpg';
    image.src = source;
}