const link = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const apiKey = "your_api_key";
const input = document.querySelector('input');
const btn = document.querySelector('button');

btn.addEventListener("click", () => {
  const city = input.value;
  fetch(`${link}${city}&appid=${apiKey}`)
    .then(response => response.json())
    .then(data => {
      document.getElementById('city').innerHTML = data.name;
      document.getElementById('temperature').innerHTML = `Temperature is ${Math.round(data.main.temp)}°C`;
      document.getElementById('condition').innerHTML = `Weather is ${data.weather[0].main}`;
      document.getElementById('wind').innerHTML = `Wind speed is ${data.wind.speed} km/h`;
      document.getElementById('humidity').innerHTML = `Humidity is ${data.main.humidity}%`;
      icon.src = `./images/${data.weather[0].main.toLowerCase()}.png`;
      document.getElementById('weather').style.display = "block";
    }).catch(error => {
      document.getElementById("error").style.display = "block";
      document.getElementById("weather").style.display = "none";
    })
});
input.addEventListener("keypress", event => {
  if (event.key === "Enter") {
    event.preventDefault();
    btn.click();
  }
});
