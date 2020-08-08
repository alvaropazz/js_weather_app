import './styles.css';

const weatherIcon = document.querySelector('.weather-icon');
const weatherDescription = document.querySelector('.description');
const temperatureBox = document.querySelector('.temperature');
const weatherLocation = document.querySelector('.location');

const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'];
const dateObj = new Date();
const month = monthNames[dateObj.getMonth()];
const day = String(dateObj.getDate()).padStart(2, '0');
const year = dateObj.getFullYear();
const output = `${month} ${day}, ${year}`;

document.querySelector('.date').innerHTML = output;

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

  console.log(unit)
  setter(place, unit).then(data => {
    weatherIcon.src = `../src/assets/icons/${data.weather[0].icon}.png`;
    weatherDescription.innerHTML = data.weather[0].description;
    temperatureBox.innerHTML = `${data.main.temp}&#xb0`;
    weatherLocation.innerHTML = `${data.name}, ${data.sys.country}`;
  });
});