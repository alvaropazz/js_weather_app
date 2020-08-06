const img = document.querySelector('img');

function setCity(city){
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=886700da32110e4284daaccee7bdf897`, {mode: 'cors'})
  .then(response => response.json())
  .then(data => console.log(data.main))
  .then(srce => img.src = srce.data.images.original.url)
};

setCity('london');