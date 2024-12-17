const options = {
  method: "GET",
  headers: {
    "x-rapidapi-key": "a3a7d073famsh43a70b10b861ed7p115a35jsnb340981d017b",
    "x-rapidapi-host": "weatherapi-com.p.rapidapi.com",
  },
};
function getWeatherDataForCities() {
  const cities = ['kolkata', 'delhi', 'bengaluru', 'pune', 'mumbai'];
  for (const city of cities) {
    fetch(`https://weatherapi-com.p.rapidapi.com/forecast.json?q=${city}&days=3`, options)
    .then((response) => response.json())
    .then((response) => {
      let temp = document.getElementById(`${city}-temp`);
      let feels_like = document.getElementById(`${city}-feels-like`);
      let maxtemp = document.getElementById(`${city}-maxtemp`);
      let mintemp = document.getElementById(`${city}-mintemp`);
      let avghu = document.getElementById(`${city}-humidity`);
      temp.innerHTML = response.current.temp_c + "°C";
      feels_like.innerHTML = response.current.feelslike_c + "°C";
      maxtemp.innerHTML = response.forecast.forecastday[0].day.maxtemp_c + "°C";
      mintemp.innerHTML = response.forecast.forecastday[0].day.mintemp_c + "°C";
      avghu.innerHTML = response.forecast.forecastday[0].day.avghumidity + "%";
    });
  }
}


getWeatherDataForCities();

const getWeather = (city) => {
    cityname.innerHTML = city.toUpperCase();
  fetch(`https://weatherapi-com.p.rapidapi.com/forecast.json?q=${city}&days=3`, options)
    .then((response) => response.json())
    .then((response) => {
      temp.innerHTML = response.current.temp_c + "°C";
      feels_like.innerHTML = response.current.feelslike_c + "°C";
      heatindex.innerHTML = response.current.heatindex_c + "°C";
      dewpoint.innerHTML = response.current.dewpoint_c + "°C";
      maxtemp.innerHTML = response.forecast.forecastday[0].day.maxtemp_c + "°C";
      mintemp.innerHTML = response.forecast.forecastday[0].day.mintemp_c + "°C";
      avgtemp.innerHTML = response.forecast.forecastday[0].day.avgtemp_c + "°C";
      avgvis.innerHTML = response.forecast.forecastday[0].day.avgvis_km + "Km";
      avghu.innerHTML = response.forecast.forecastday[0].day.avghumidity + "%";
    });
};
getWeather("Kolkata");

submit.addEventListener("click",(e)=>{
    e.preventDefault();
    getWeather(city.value);
})

