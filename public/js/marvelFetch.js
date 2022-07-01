// //define elements where content will be added
// // const imgElement = document.querySelector("#character-img"); //added this if we want to update the character's thumbnail image into the character page being displayed
// // const bioElement = document.querySelector("#character-description"); //added this for same reason, update bio via API
// //define api URL
// let characterName;
// let charNameSpaces;
// const apiUrl = "https://gateway.marvel.com/v1/public/characters?name="+ characterName +"&ts=test&apikey="+ process.env.API_KEY +"&hash=bf87806abd3d8c926aa52d5042ac4a42"
// const mysql = require("mysql2");

// //define db as a mySql connection -copied from mod 12 section 21
// const db = mysql.createConnection(
//     {
//       host: 'localhost',
//       // MySQL username,
//       user: DB_USER,
//       // MySQL password
//       password: DB_PASSWORD,
//       database: 'marvel_db'
//     },
//     console.log(`Connected to the marvel_db database.`)
//   );
//   db.connect();


// function marvelFetch (req, res) {
//     db.promise().query("SELECT character_name FROM character WHERE character.id = ?", req.params.id, (err, results) => {
//         if (err) {
//             console.log(err);
//           }
//           console.log(result);
//           charNameSpaces = result;
//     })
//     //then replace the spaces with %20 for URL..
//     .then((charNameSpaces) => {
//         characterName= charNameSpaces.replace(" ", "%20");
//     });
//     //try to fetch the given character's URL (maybe as an external function)....
//     fetch(apiUrl)
//     .then(function(res){
//         return res.json();
//       })
//       .then(function(data) {
//         //then save the Bio and Thumbnail as variables...
//         let thumbnailImg = data.data.results.thumbnail + "landscape_incredible.jpg";
//         let bio = data.data.results.description ;
//         //Then use .innerhtml to render that content correct place in our webpage...
//         imgElement.innerHTML(`<img src=${thumbnailImg}/>`)
//         bioElement.innerHTML(bio);
//       })
// };

// //call function (since it is linked in character.handlebars, it should only be called upon each page loading on api/characters/)
// marvelFetch();

// //export the function marvelFetch once we use this file?
// module.exports = marvelFetch();