// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

axios.get("https://lambda-times-backend.herokuapp.com/articles")
.then((response) => {
    console.log(response);
    response.data.articles.bootstrap.forEach((article) => cardCreator(article));
    response.data.articles.javascript.forEach((article) => cardCreator(article));
    response.data.articles.jquery.forEach((article) => cardCreator(article));
    response.data.articles.node.forEach((article) => cardCreator(article));
    response.data.articles.technology.forEach((article) => cardCreator(article));
})

.catch((err) => {
    console.log(err)
})



function cardCreator(data){
    const 
    cardDiv = document.createElement("div"),
    headlineDiv = document.createElement("div"),
    authorDiv = document.createElement("div"),
        imageContainerDiv = document.createElement("div"),
            image = document.createElement("img"),
    authorSpan = document.createElement("span");

    cardDiv.classList.add("card");
    headlineDiv.classList.add("headline");
    authorDiv.classList.add("author");
        imageContainerDiv.classList.add("img-container");

    headlineDiv.textContent = data.headline;
    imageContainerDiv.src = data.authorPhoto;
    authorSpan.textContent = data.authorName;
    
    cardDiv.appendChild(headlineDiv);
    cardDiv.appendChild(authorDiv);
    authorDiv.appendChild(imageContainerDiv);
    imageContainerDiv.appendChild(image);
    authorDiv.appendChild(authorSpan);

    const cardsContainer = document.querySelector(".cards-container");
    cardsContainer.appendChild(cardDiv);

    return cardDiv;
}