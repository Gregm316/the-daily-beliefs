console.log("character.js");

fetch("/api/characters/", {
    method: "POST",
    headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: JSON.stringify({ characterId: 1 }) //hardcoded a 1 for ID for right now to test if it will work
})
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