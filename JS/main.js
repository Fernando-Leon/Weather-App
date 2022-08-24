window.addEventListener("load", () => {
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position => {
            let lat = position.coords.latitude;//Latitude 
            let lon = position.coords.longitude;//Longitude
            let key = "0de97a5ffc979248b4a69aa8aabbaf13";//accessibility key
            let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}&units=metric&lang=es`;
            getData(url);
        })
    }
})

const getData = async (direction) => {
    request = await axios(direction);
    document.getElementById("name-location").innerHTML =  `${request.data.name} - ${request.data.sys.country}`;//Ubication and name of the location
    document.getElementById("temp-desc").innerHTML = request.data.weather[0].description;//Description of the clima 
    document.getElementById("temp").innerHTML = `${Math.floor(request.data.main.temp)} °C`;//Current temperature
    document.getElementById("temp-min").innerHTML = `${Math.floor(request.data.main.temp_min)} °C`;//Temperature min
    document.getElementById("temp-max").innerHTML = `${Math.floor(request.data.main.temp_max)} °C`;//Temperature max
    document.getElementById("humidity").innerHTML = `${request.data.main.humidity}%`;//Humidity
    document.getElementById("speed-air").innerHTML = `${request.data.wind.speed} m/s`;//Speed Air
    insertImgSvg();//SVG to description 
}

const insertImgSvg = () => {
    let itemIcon = document.getElementById("icon-view");
    let value = request.data.weather[0].main;
    (value === 'Thunderstorm') ? itemIcon.src='SVG/thunder.svg':
    (value === 'Drizzle') ? itemIcon.src='SVG/rainy.svg':
    (value === 'Rain') ? itemIcon.src='SVG/rainy.svg':
    (value === 'Snow') ? itemIcon.src='SVG/snowy.svg':
    (value === 'Clear') ? itemIcon.src='SVG/day.svg':
    (value === 'Atmosphere') ? itemIcon.src='SVG/weather.svg':
    (value === 'Clouds') ? itemIcon.src='SVG/cloudy-day-1.svg':
    (value === 'Thunderstorm') ? itemIcon.src='SVG/cloudy-day-1.svg': itemIcon.src='SVG/cloudy-day-1.svg';
}