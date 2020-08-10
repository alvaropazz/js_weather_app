import './styles.css';

const weatherIcon = document.querySelector('.weather-icon');
const weatherDescription = document.querySelector('.description');
const temperatureBox = document.querySelector('.temperature');
const weatherLocation = document.querySelector('.location');

async function setter(city, unit) {
  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${unit}&appid=886700da32110e4284daaccee7bdf897`, { mode: 'cors' });
  const json = await response.json();
  return json;
}

const setLocation = document.querySelector('.search');
setLocation.addEventListener('submit', (e) => {
  e.preventDefault();
  const form = e.target;
  const place = form.querySelector('input[name="place"]').value;
  const unit = form.querySelector('#unit option:checked').value;

  setter(place, unit).then(data => {
    weatherIcon.src = `../src/assets/icons/${data.weather[0].icon}.png`;
    weatherDescription.innerHTML = data.weather[0].description;
    temperatureBox.innerHTML = `${data.main.temp}&#xb0`;
    weatherLocation.innerHTML = calcTime(data.name, data.timezone);
    ;
  });


});

function calcTime(city, offset) {
  let date = new Date();
  let utc = date.getTime() + (date.getTimezoneOffset() * 60 * 1000);
  let nd = new Date(utc + (1000 * offset));
  return city + "'s date is "+ nd.toLocaleString();
}