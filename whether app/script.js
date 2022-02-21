const locationElement = document.getElementById('location');
var iconElement = document.getElementById('temperature-icon');
const tempElement = document.getElementById('temperature-value');
const climate = document.getElementById('climate');

const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');

const apikey = "9577ed9712a7b415338789f085bfb72f";

function weatherDetails(info) {
    console.log("weather data", info)
    const city = info.name;
    const { description, id, main } = info && info.weather && Object.keys(info.weather).length > 0 && info.weather[0];
    const temp = info.main.temp;

    locationElement.innerHTML = city;
    climate.textContent = main;
    tempElement.textContent = Math.round(temp - 273);
    if (id < 300 && id > 200) {

        iconElement.src = "./icons/thunderstorm.svg"
    }
    else if (id < 400 && id > 300) {
        iconElement.src = "./icons/cloud-solid.svg"
    }
    else if (id < 600 && id > 500) {
        iconElement.src = "./icons/rain.svg"
    }
    else if (id < 700 && id > 600) {
        iconElement.src = "./icons/snow.svg"
    }
    else if (id < 800 && id > 700) {
        iconElement.src = "./icons/clouds.svg"
    }
    else if (id == 800) {
        iconElement.src = "./icons/clouds-and-sun.svg"
    }
    console.log(info);
}

function getWeather(city) {
    console.log("input data", city)
    let api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`
    //getting API response and returning it into object and in other then calling weatherDetails function by passing api result as an argument.
    fetch(api)
    .then((response) => response.json())
    .then((result) => weatherDetails(result));

}

searchButton.addEventListener("click", (e) => {
    //if user pressed enter key and value isnt empty
    // console.log("input data", searchInput)
    if (searchInput.value != "") {
        getWeather(searchInput.value)
    }
    searchInput.value = "";
})

function getWeatherByGeoLoc(currLocation) {
    console.log("pos", currLocation);
    var lat =currLocation && currLocation.coords && currLocation.coords.latitude;
    var lon =currLocation && currLocation.coords && currLocation.coords.longitude;
    const api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apikey}`
    fetch(api)
    .then((res) => res.json())
    .then((result)=> {
        console.log("res",result);
        weatherDetails(result);
    });
}

function handleOnload() {
    navigator.geolocation.getCurrentPosition(getWeatherByGeoLoc, (err) => {
        console.log("err",err)
    })

}
