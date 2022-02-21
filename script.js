function searchWeather() {
    const card = document.querySelector('.card');
    card.style.display = 'block';

    fetch('http://api.weatherstack.com/current?access_key=7ae237b2c8dccfdac7534a8448a37b42&query=' + searchInput.value)
        .then(response => response.json())
        .then(response => {
            const location = response.location;
            const current = response.current;

            let content = '';
            let content2 = '';

            content += showWeatherLocation(location)
            content2 += showWeatherCurrent(current)

            const divLocation = document.getElementById('location');
            const divCurrent = document.getElementById('current');
            divLocation.innerHTML = content;
            divCurrent.innerHTML = content2;
        });
    searchInput.value = '';
}

function showWeatherLocation(location) {
    return `
        <h1 class="card-title">${location.localtime}</h1>
        <img src="img/map.png" class="img-fluid mb-3" width="80">
        <h3 class="mb-3">${location.name}, ${location.region}, ${location.country}</h3>
        <img src="img/time-zone.png" class="img-fluid mb-3" width="80">
        <h3 class="mb-3">${location.timezone_id}</h3>
    `;
}

function showWeatherCurrent(current) {
    return `
        <h3 class="mb-3">${current.temperature} &deg; C</h3>
        <img src="img/wind.png" class="img-fluid mb-3" width="80">
        <h3 class="mb-3">${current.wind_speed} km/h</h3>
    `;
}

const searchButton = document.getElementById('search-button');
searchButton.addEventListener('click', function () {
    searchWeather();
});

const searchInput = document.getElementById('search-input');
searchInput.addEventListener('keyup', function () {
    if (window.event.keyCode === 13) {
        searchWeather();
    }
});