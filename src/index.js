import './styles.css';

let weatherIcon = document.querySelector('.weather-icon');
let weatherDescription = document.querySelector('.description')
let temperatureBox = document.querySelector('.temperature')
let weatherLocation = document.querySelector('.location')

const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"];
let dateObj = new Date();
let month = monthNames[dateObj.getMonth()];
let day = String(dateObj.getDate()).padStart(2, '0');
let year = dateObj.getFullYear();
let output = month  + ' '+ day + ', ' + year;

document.querySelector('.date').innerHTML = output;

async function setter(city){
  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=886700da32110e4284daaccee7bdf897`, {mode: 'cors'});
  const json = await response.json();
  return json
};

let setLocation = document.querySelector('.search')
setLocation.addEventListener('submit', function(e){
  e.preventDefault()
  let form = e.target
  let place = form.querySelector('input[name="place"]').value

  setter(place).then(data => {
    weatherIcon.src = `../src/assets/icons/${data.weather[0].icon}.png`;
    weatherDescription.innerHTML = data.weather[0].description;
    temperatureBox.innerHTML = data.main.temp+'&#xb0';
    weatherLocation.innerHTML = data.name + ', ' + data.sys.country;
  });

})


  