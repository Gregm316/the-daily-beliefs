console.log("character.js");

fetch("/api/characters/")
.then((status) => {
    if(status.ok) {
        status.json();
    }
})
.then((data) => {
    console.log("Data: ", data);
    //do we need command here to redirect to the appropriate caracter page, based on the value of req.session.characterId
    // location.replace(`/api/characters/${req.session.characterId}`);
    //
})