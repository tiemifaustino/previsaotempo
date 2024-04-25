const key = '64bd07747d12d6faa2d015d2f0171084';

function clickOnButton() {
  let city = document.querySelector('.input-city').value;
  searchCity(city);
}

async function searchCity(cityName) {
  let data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&lang=pt&appid=${key}&units=metric`).then((response) => response.json());
  // let data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${key}&lang=${lang}`);
  // let response = await data.json();
  console.log(data);
  console.log(data.name);
}

function putOnScreen() {

}
