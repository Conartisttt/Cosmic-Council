//__________________________________________CONNER MARTIN__________________________________________________

// Working Tarot Card

const signArr = ["capricorn", "leo", "taurus", "sagittarius", "pisces", "cancer", "scorpio", "aries", "aquarius", "libra", "gemini", "virgo"];
const sign = "leo";

function findHoroscope() {
    fetch('https://horoscope-app-api.vercel.app/api/v1/get-horoscope/daily?sign=' + sign + '&day=today')
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data)
            const currentDate = data.data.date;
            console.log(currentDate);
            const dailyHoroscope = data.data.horoscope_data;
            console.log(dailyHoroscope);
        })
}

findTarot();
function findTarot() {
    fetch('https://tarot-api-3hv5.onrender.com/api/v1')
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data)
            const cardsArr = data.cards;
            console.log(cardsArr);
            const cardsArrLength = cardsArr.length;
            console.log(cardsArrLength);
            const randomIndex = Math.floor(Math.random() * cardsArrLength);
            console.log(randomIndex);
            const randomCard = cardsArr[randomIndex];
            console.log(randomCard);
        })
};
//__________________________________________CONNER MARTIN__________________________________________________