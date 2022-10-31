// openweathermap API
const api = {
  key: "3ec8d10232311bdaa851b087adf32e99",
  base: "https://api.openweathermap.org/data/2.5/"
}

// Hakulaatikko
const searchbox = document.querySelector('.search-box');
searchbox.addEventListener('keypress', setQuery);

function setQuery(evt) {
  if (evt.keyCode == 13) {
    getResults(searchbox.value);
  }
}

// Kaupunkin haku palkki, yksiköt metrijärjestelmään ja kieli suomeksi
function getResults (query) {
  fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}&lang=fi`)
    .then(weather => {
      return weather.json();
    }).then(displayResults);
}

// kaupunki
function displayResults (weather) {
  let city = document.querySelector('.location .city');
  city.innerText = `${weather.name}`;

// lämpötila
  let temp = document.querySelector('.current .temp');
  temp.innerHTML = `${(weather.main.temp)}<span>°c</span>`;
}
