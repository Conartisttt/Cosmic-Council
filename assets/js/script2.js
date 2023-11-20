//establish variables using html id selectors
const homeBtn = document.getElementById("homepage");
const savedCardsSection = document.getElementById("saved-cards");

//event listener for button
homeBtn.addEventListener("click", goHome);


//function to redirect to index.html page
function goHome() {
    window.location.href = "index.html"
}

//function to get saved cards from local storage and dispaly to the screen
function getStorage() {
    const cards = JSON.parse(localStorage.getItem("savedcards")) || [];
    if(cards.length === 0) {
        return;
    }
    for (let i = 0; i < cards.length; i++) {
        const cardHTML = cards[i];
        savedCardsSection.innerHTML += cardHTML;
    }
}

getStorage();