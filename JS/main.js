window.addEventListener("load", () => {
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position => {
            lat = position.coords.latitude;
            lon = position.coords.longitude;
            key = "0de97a5ffc979248b4a69aa8aabbaf13";
            const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}&units=metric&lang=es`;
            getData(url);
            console.log(url);
        })
    }
})


const getData = async (direction) => {
    request = await axios(direction);
    let temperature = Math.floor(request.data.main.temp);//Temperature
    let temperatureMin = Math.floor(request.data.main.temp_min);//Temperature min
    let temperatureMax = Math.floor(request.data.main.temp_max);//Temperature max
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
    itemHumidity.innerHTML = `${humidity}%`;
    insertImgSvg(); 
}

const insertImgSvg = () => {
    let itemIcon = document.getElementById("icon-view");
    switch (request.data.weather[0].main) {
        case 'Thunderstorm':
            itemIcon.src='SVG/thunder.svg'
            console.log('TORMENTA');
            break;
        case 'Drizzle':
            itemIcon.src='SVG/rainy-2.svg'
            console.log('LLOVIZNA');
            break;
        case 'Rain':
            itemIcon.src='SVG/rainy-7.svg'
            console.log('LLUVIA');
            break;
        case 'Snow':
            itemIcon.src='SVG/snowy-6.svg'
            console.log('NIEVE');
            break;                        
        case 'Clear':
            itemIcon.src='SVG/day.svg'
            console.log('LIMPIO');
            break;
        case 'Atmosphere':
            itemIcon.src='SVG/weather.svg'
            console.log('ATMOSFERA');
            break;  
        case 'Clouds':
            itemIcon.src='SVG/cloudy-day-1.svg'
            console.log('NUBES');
            break;  
        default:
            itemIcon.src='SVG/cloudy-day-1.svg'
            console.log('por defecto');
    }
}