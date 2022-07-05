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