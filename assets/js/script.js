// __________________________________________SAM BRESLIN_____________________________________________________

// **** Working Horoscope ****

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

//  **** Moon Phase Image ****

// function moonPhase() {
//     // check API key
//     const apiKey = '55caeb9ec0msh6e0357c32814c41p1b3256jsn7795dd532024';
//     fetch('https://astronomy.p.rapidapi.com/api/v2/studio/moon-phase', {
//         method: 'POST',
//         headers: {
//             'content-type': 'application/json',
//             'x-rapidapi-key': apiKey,
//             "x-rapidapi-host": "astronomy.p.rapidapi.com"
//         },
//         body: {
//             format: 'png',
//             observer: {
//                 date: '2020-11-01',
//                 latitude: 6.56774,
//                 longitude: 79.88956
//             },
//             style: {
//                 backgroundColor: 'red',
//                 backgroundStyle: 'stars',
//                 headingColor: 'white',
//                 moonStyle: 'sketch',
//                 textColor: 'red'
//             },
//             view: {
//                 type: 'portrait-simple'
//             }
//         }
//     })
//     .then(function (response) {
//         console.log(response, typeof response);
//         return response.blob();
//     })
//         .then((blob) => {
//             const imageUrl = URL.createObjectURL(blob);
//             const imageElement = document.createElement("img");
//             imageElement.src = imageUrl;
//             const moons = document.getElementById('moons');
//             moons.appendChild(imageElement);
//         });
// }

// ******** NEW MOON PHASE ***************

const authString = btoa(`dded7d1b-9092-4ba7-b4c2-7d8ecd9f4b55:f90d146b196dce687aed0a82ef0915f1134236174b57a8df181b3ba88200c77a6a8d85c25c56451b5ac08c94cc3227fc6e62e81fae94e2c9c7cfd3ad92e50c9466fb5db2fc7dbb52ba712aa0b1336384b062f7fcf8c86408c47c755000bd4bc9b7850de3d5414ad3f35a91d82b45c6a9`);

if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
     

      const data = {
        format: 'png',
        observer: {
            date: '2020-11-01',
            latitude: latitude,
            longitude: longitude
        },
        style: {
            backgroundColor: 'red',
            backgroundStyle: 'stars',
            headingColor: 'white',
            moonStyle: 'sketch',
            textColor: 'red'
        },
        view: {
            type: 'portrait-simple'
        }
    }

      
      fetch("https://api.astronomyapi.com/api/v2/studio/moon-phase", {
    method: "POST",
    headers: {
        'Authorization': "Basic " + authString,
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
}).then(function(response) {
    return response.json();
}).then(function(data) {
    console.log(data);
})
    });
  } else {
    console.log("Geolocation is not supported by this browser.");
  }


// _________________________________________SAM BRESLIN____________________________________________________


//__________________________________________CONNER MARTIN__________________________________________________

// Working Tarot Card

// const tarotImage = document.getElementById("tarot-card-img");
// const cardDiv = document.getElementById("card-div");
// const pullCardBtn = document.getElementById("pull-card-btn");

// pullCardBtn.addEventListener("click", findTarot);
// const titleEl = document.createElement("h2");
// const cardDesc = document.createElement("p");

function findTarot() {
    fetch('https://tarot-api-3hv5.onrender.com/api/v1')
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            tarotImage.classList.remove("image-flip");
            cardDesc.textContent = "";
            titleEl.textContent = "";
            const meaningArr = [];
            const cardsArr = data.cards;
            const cardsArrLength = cardsArr.length;
            const randomCardIndex = Math.floor(Math.random() * cardsArrLength);
            const randomCard = cardsArr[randomCardIndex];
            meaningArr.push(randomCard.meaning_up);
            meaningArr.push(randomCard.meaning_rev);
            const meaningLength = meaningArr.length
            const randomDirectionIndex = Math.floor(Math.random() * meaningLength);
            console.log(randomCard); //leaving this for now to help with reverse pull this week
            titleEl.textContent = randomCard.name;
            cardDiv.prepend(titleEl);
            cardDesc.textContent = meaningArr[randomDirectionIndex];
            cardDiv.appendChild(cardDesc);
            tarotImage.setAttribute("src", "./assets/images/" + randomCardIndex + ".jpg");
            if (randomDirectionIndex === 1) {
                tarotImage.classList.add("image-flip");
                titleEl.textContent = randomCard.name + " - Reverse Pull";
            };
        })
};
//__________________________________________CONNER MARTIN__________________________________________________