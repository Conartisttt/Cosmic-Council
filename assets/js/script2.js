//AY - Script for Local Storage Functionality
const homeBtn = document.getElementById("homepage");

homeBtn.addEventListener("click", goHome);

function goHome() {
    window.location.href = "index.html"
}

const savedCardsSection = document.getElementById("saved-cards");

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