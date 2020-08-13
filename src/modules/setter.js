export default async function setter(city, unit) {
  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${unit}&appid=886700da32110e4284daaccee7bdf897`, { mode: 'cors' });
  const json = await response.json();
  return json;
}