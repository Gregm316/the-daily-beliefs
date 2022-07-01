//define elements where content will be added
const imgElement = document.querySelector("#img-placeholder"); //added this if we want to update the character's thumbnail image into the character page being displayed
const bioElement = document.querySelector("#bio-placeholder"); //added this for same reason, update bio via API
//define api URL
const apiUrl = "https://gateway.marvel.com/v1/public/characters?name=hulk&ts=test&apikey="+ process.env.API_KEY +"&hash=c3ab47d4e62a9d8621a7777293aa85ee"


//think about - what calls the fetch function?

function marvelFetch () {
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
};

//call function (since it is linked in character.handlebars, it should only be called upon each page loading on api/characters/)
marvelFetch();