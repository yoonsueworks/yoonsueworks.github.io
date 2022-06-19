const API_KEY = "880f5cea4372ada63a52a1840296cf4c";

function onGeoOK(position) {
  const lat = position.coords.latitude;
  const long = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${API_KEY}&units=metric`;
  fetch(url).then((reponse) => reponse.json())
            .then((data) => {
      const weather = document.querySelector("#weather span:first-child");
      const city = document.querySelector("#weather span:last-child");
      city.innerText = data.name;
      weather.innerText =`${data.weather[0].main}, ${data.main.temp}`
    })
  
}
function onGeoErr() {
  alert("Can't Find Your Location.");
}

navigator.geolocation.getCurrentPosition(onGeoOK, onGeoErr);
