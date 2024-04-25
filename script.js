const key = '64bd07747d12d6faa2d015d2f0171084';

function putOnScreen(data) {
  let city = data.name;
  let temp = Math.round(data.main.temp);
  let max = Math.round(data.main.temp_max);
  let min = Math.round(data.main.temp_min);  
  let icon = data.weather[0].icon;
  let description = `${data.weather[0].description.charAt(0).toUpperCase()}${data.weather[0].description.slice(1)}`;
  let humidity = data.main.humidity;

  document.querySelector('.city').innerHTML = `Tempo em ${city}`;
  document.querySelector('.temp').innerHTML = `${temp}°C`;
  document.querySelector('.icon').src = `https://openweathermap.org/img/wn/${icon}.png`;
  document.querySelector('.description').innerHTML = description;
  document.querySelector('.humidity').innerHTML = `Umidade: ${humidity}%`;
  document.querySelector('.max').innerHTML = `Máx: ${max}°C`
  document.querySelector('.min').innerHTML = `Mín: ${min}°C`
}

async function searchCity(cityName) {
  let data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&lang=pt&appid=${key}&units=metric`).then((response) => response.json());
  // let data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&lang=pt&appid=${key}&units=metric``);
  // let response = await data.json();
  putOnScreen(data);
}

function clickOnButton() {
  let city = document.querySelector('.input-city').value;
  searchCity(city);
}
