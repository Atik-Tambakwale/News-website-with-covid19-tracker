let searchweather = document.querySelector("#searchCityName");

searchweather.addEventListener("keyup", (e) => {
    let searchCity = e.target.value;
    searchWeather(searchCity);
});

function searchWeather(searchCity) {
    let weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${searchCity}&appid=61dfcac4affdb1226d759a741b302fb6`;
    let weatherNews = async () => {
        let weatherData = await window.fetch(weatherUrl);
        let weatherResponseData = await weatherData.json();
        let weatherInfo = weatherResponseData.weather;
        let mainInfo = weatherResponseData.main;
        let sysInfo = weatherResponseData.sys;
        let windInfo = weatherResponseData.wind;
        for (let x of weatherInfo) {
            document.getElementById("weatherBody").innerHTML = `
            <div id="weatherBody-div">
                <div id="div1">
                    <h1 class="div1-h1">${weatherResponseData.name},${sysInfo.country}</h1>
                    <img src="http://openweathermap.org/img/wn/${x.icon}.png" alt="" class="div1-img">
                    <p class="div1-p">${x.description}</p>
                </div>
                <div id="div2">
                    <h1 class="div2-h1">Temperature</h1>
                    <span class="div2-span1">${parseInt(mainInfo.temp - 273)}&deg;C</span>
                    <span class="div2-span2">Temp Min/Temp Max</span>
                    <span class="div2-span3">${parseInt(mainInfo.temp - 273)}&deg;C/${parseInt(mainInfo.temp - 273)}&deg;C</span>
                </div>
                <div id="div3">
                    <h1 class="div3-h1">More Details</h1>
                    <p>Pressure:</p>
                    <span class="div3-span1">${mainInfo.pressure}</span>
                    <p>Humidity:</p>
                    <span class="div3-span2">${mainInfo.humidity}</span>
                    <p>Wind Speed:</p>
                    <span class="div3-span3">${windInfo.speed}</span>
                </div>
            </div>`;
        }
    };
    weatherNews();
}