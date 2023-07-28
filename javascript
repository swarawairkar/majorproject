// Replace the API_KEY with your own API key from a weather API service
const API_KEY = 'YOUR_API_KEY';

// Replace the CITY_NAME with the name of the city you want to display the weather for
const CITY_NAME = 'CITY_NAME';

// Fetch weather data from the API and update the widget
fetch(`https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${CITY_NAME}`)
.then(response => response.json())
.then(data => {
document.getElementById('location').textContent = data.location.name;
document.getElementById('temperature').textContent = `${data.current.temp_c}°C`;
document.getElementById('description').textContent = data.current.condition.text;
document.getElementById('weather-icon').style.backgroundImage = `url(${data.current.condition.icon})`;
} )
.catch(error => {
console.log(error);
document.getElementById('widget').textContent = 'Error
