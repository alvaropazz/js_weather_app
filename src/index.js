import './styles.css';
import getDate from './modules/date';
import setter from './modules/setter';
import a_01d from './assets/icons/a_01d.png';
import a_01n from './assets/icons/a_01n.png';
import a_02d from './assets/icons/a_02d.png';
import a_02n from './assets/icons/a_02n.png';
import a_03d from './assets/icons/a_03d.png';
import a_03n from './assets/icons/a_03n.png';
import a_04d from './assets/icons/a_04d.png';
import a_04n from './assets/icons/a_04n.png';
import a_09d from './assets/icons/a_09d.png';
import a_09n from './assets/icons/a_09n.png';
import a_10d from './assets/icons/a_10d.png';
import a_10n from './assets/icons/a_10n.png';
import a_11d from './assets/icons/a_11d.png';
import a_11n from './assets/icons/a_11n.png';
import a_13d from './assets/icons/a_13d.png';
import a_13n from './assets/icons/a_13n.png';
import a_50d from './assets/icons/a_50d.png';
import a_50n from './assets/icons/a_50n.png';

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
      weatherIcon.src = "a_"+ data.weather[0].icon;
      console.log(weatherIcon.src)
      weatherDescription.innerHTML = data.weather[0].description;
      temperatureBox.innerHTML = `${data.main.temp}&#xb0`;
      weatherLocation.innerHTML = getDate(data.name, data.timezone);
    }
  });
});