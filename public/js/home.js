//imports

//code here to check if user logged in, if so change log in button to log out
const logInOutButton = document.querySelector("#login-button");

//purpose of this file is to try to redirect the user to the appropriate character page, based on their selection from the drop down...

let dropdown = document.querySelector("#character-selection");

const selectedChar = dropdown.value;
const getStartedBtn = document.querySelector("#get-started");


getStartedBtn.addEventListener("click", saveCharacterId);


async function saveCharacterId(selectedChar) {
    console.log("routeCreator function called"); //test
    let charId;
    //process that will retrieve the ID number based on selectedChar text
    try {
        const response = await fetch(`/api/characters`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify({ characterId: selectedChar })
        });
        console.log("Checking response: ", response);
        console.log("response.ok: ", response.ok);
        if (response.ok) {
            // const characterData = await response.json()
            // console.log(characterData);
            location.replace("/characters");
            // location.replace("/character-spiderman.html");
        }
    } catch (err) {
        console.log(err);
    }

};


console.log("***home.js linked!"); //test

