import './styles.css';
import getDate from './modules/date';
import setter from './modules/setter';
import o1d from './assets/icons/01d.png';
import o1n from './assets/icons/01d.png';
import o2d from './assets/icons/02d.png';
import o2n from './assets/icons/02n.png';
import o3d from './assets/icons/03d.png';
import o3n from './assets/icons/03n.png';
import o4d from './assets/icons/04d.png';
import o4n from './assets/icons/04n.png';
import o9d from './assets/icons/09d.png';
import o9n from './assets/icons/09n.png';
import o10d from './assets/icons/10d.png';
import o10n from './assets/icons/10n.png';
import o11d from './assets/icons/11d.png';
import o11n from './assets/icons/11n.png';
import o13d from './assets/icons/13d.png';
import o13n from './assets/icons/13n.png';
import o50d from './assets/icons/50d.png';
import o50n from './assets/icons/50n.png';

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
      weatherIcon.src = `../src/assets/icons/${data.weather[0].icon}.png`;
      weatherDescription.innerHTML = data.weather[0].description;
      temperatureBox.innerHTML = `${data.main.temp}&#xb0`;
      weatherLocation.innerHTML = getDate(data.name, data.timezone);
    }
  });
});