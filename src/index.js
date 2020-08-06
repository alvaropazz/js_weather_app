function setCity(city){
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=886700da32110e4284daaccee7bdf897`, {mode: 'cors'})
  .then(response => response.json())
  .then(data => console.log(data));
};