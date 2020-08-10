import './styles.css';
import getDate from './modules/date';
import setter from './modules/setter';

const weatherIcon = document.querySelector('.weather-icon');
const weatherDescription = document.querySelector('.description');
const temperatureBox = document.querySelector('.temperature');
const weatherLocation = document.querySelector('.location');

const setLocation = document.querySelector('.search');
setLocation.addEventListener('submit', (e) => {
  e.preventDefault();
  const form = e.target;
  const place = form.querySelector('input[name="place"]').value;
  const unit = form.querySelector('#unit option:checked').value;

  setter(place, unit).then(data => {
    if (data.cod === '404') {
      alert('no data for input location'); // eslint-disable-line no-alert
    } else {
      weatherIcon.src = `../src/assets/icons/a_${data.weather[0].icon}.png`;
      weatherDescription.innerHTML = data.weather[0].description;
      temperatureBox.innerHTML = `${data.main.temp}&#xb0`;
      weatherLocation.innerHTML = getDate(data.name, data.timezone);
    }
  });
});