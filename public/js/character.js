console.log("character.js");

fetch("/api/characters/")
.then((status) => {
    if(status.ok) {
        status.json();
    }
})
.then((data) => {
    console.log("Data: ", data);

});


const oldComments = document.getElementById('old-comments');
const commentText = document.querySelector('.textarea');
const submitBtn = document.getElementById('submit');

submitBtn.addEventListener("click", newComment);

function newComment() {

    const article = document.createElement("article");
    article.classList.add('media');
    oldComments.appendChild(article);

    const div1 = document.createElement("div");
    div1.classList.add('media-content');
    article.appendChild(div1);

    const div2 = document.createElement("div");
    div1.classList.add('content');
    div1.appendChild(div2);
    
    
    const p = document.createElement('p');

    p.innerHTML = '<strong>' + 'USERNAME' + '</strong>' + 
    '<br>' + commentText.value;
    div2.appendChild(p);
}

