window.addEventListener("load", () => {
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position => {
            lat = position.coords.latitude;
            lon = position.coords.longitude;
            key = "0de97a5ffc979248b4a69aa8aabbaf13";
            const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}&units=metric`;
            getData(url);
            console.log(url)
        })
    }
})


const getData = async (direction) => {
    request = await axios(direction);
    let temperature = request.data.main.temp;//Temperature
    let temperatureMin = request.data.main.temp_min;//Temperature min
    let temperatureMax = request.data.main.temp_max;//Temperature max
    let descriptionTemp = request.data.weather[0].description;//Description to status weather
    let nameCity = request.data.name;//Name of city location
    let nameContry = request.data.sys.country;//Name of country location
    let speedAir = request.data.wind.speed;//Speed air
    let humidity = request.data.main.humidity;//Humidity of value

    let itemNameLocation = document.getElementById("name-location");
    let itemDescTemp = document.getElementById("temp-desc");  
    let itemTemp = document.getElementById("temp"); 
    let itemTempMin = document.getElementById("temp-min");
    let itemTempMax = document.getElementById("temp-max");
    let itemHumidity = document.getElementById("humidity"); 
    let itemSpeedAir = document.getElementById("speed-air"); 

    itemNameLocation.innerHTML = `${nameCity} - ${nameContry}`
    itemDescTemp.innerHTML = descriptionTemp;
    itemTemp.innerHTML = `${temperature} °C`;
    itemTempMin.innerHTML = `${temperatureMin} °C`;
    itemTempMax.innerHTML = `${temperatureMax} °C`;
    itemSpeedAir.innerHTML = `${speedAir} m/s`;
    itemHumidity.innerHTML = `${humidity} %`; 
}