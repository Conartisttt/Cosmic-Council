// __________________________________________SAM BRESLIN_____________________________________________________

// Working Horoscope

// established variables using HTML id selectors
const dropDown = document.getElementById('dropdown');
const viewHoroscopeBtn = document.getElementById('dailybutton');
const title = document.getElementById('zodiac');
const date = document.getElementById('date');
const horoscope = document.getElementById('horoscope');

// function that fetches data and saves to local storage
function findHoroscope(dailyHoroscope) {
    const sign = dropDown.value;
    console.log(sign);
    fetch('https://horoscope-app-api.vercel.app/api/v1/get-horoscope/daily?sign=' + sign + '&day=tomorrow')
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            const dailyHoroscope = data.data.horoscope_data;
            console.log(dailyHoroscope);
            localStorage.setItem('dailyHoroscope', dailyHoroscope);
        })
}

// function that displays the zodiac sign, current date, and daily horoscope
function displayHoroscope() {
    title.textContent = dropDown.value;
    let date = dayjs()
    $('#date').text(date.format('dddd, MMM D, YYYY'));
    const storedHoroscope = localStorage.getItem('dailyHoroscope');
    console.log(storedHoroscope);
    horoscope.textContent = storedHoroscope;
};

// event listeners for changes to dropdown list value and the 'View Your Horoscope' button
dropDown.addEventListener('change', findHoroscope);
viewHoroscopeBtn.addEventListener('click', displayHoroscope);


// _________________________________________SAM BRESLIN____________________________________________________


//__________________________________________CONNER MARTIN__________________________________________________

// Working Tarot Card

const tarotImage = document.getElementById("tarot-card-img");
const cardDiv = document.getElementById("card-div");
const pullCardBtn = document.getElementById("pull-card-btn");

pullCardBtn.addEventListener("click", findTarot);

function findTarot() {
    fetch('https://tarot-api-3hv5.onrender.com/api/v1')
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            const cardsArr = data.cards;
            const cardsArrLength = cardsArr.length;
            const randomIndex = Math.floor(Math.random() * cardsArrLength);
            const randomCard = cardsArr[randomIndex];
            console.log(randomCard); //leaving this for now to help with reverse pull this week
            const titleEl = document.createElement("h2");
            titleEl.textContent = randomCard.name;
            cardDiv.prepend(titleEl);
            const cardDesc = document.createElement("p");
            cardDesc.textContent = randomCard.meaning_up;
            cardDiv.appendChild(cardDesc);
            tarotImage.setAttribute("src", "./assets/images/" + randomIndex + ".jpg")
        })
};
//__________________________________________CONNER MARTIN__________________________________________________