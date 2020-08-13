export default function getDate(city, offset) {
  const date = new Date();
  const utc = date.getTime() + (date.getTimezoneOffset() * 60 * 1000);
  const nd = new Date(utc + (1000 * offset));
  return `${city}'s date is ${nd.toLocaleString()}`;
}