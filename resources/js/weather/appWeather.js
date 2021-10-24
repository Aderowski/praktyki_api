function getWeather(input) {
	fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input}&lang=pl&units=metric&appid=1aa6e284241189dac91259c99cc32022`)
	.then(function(resp) { return resp.json() })
	.then(function(data) {

        // console.log(data);
        
        let city = data.name;
        let temp = data.main.temp;
        let tempFeel = data.main.feels_like;
        let pressure = data.main.pressure;
        let humidity = data.main.humidity;
        let description = data.weather[0].description;

		document.getElementById("content").innerHTML = `
		<div class="card mx-auto mt-5">
            <div class="card-body justify-content-center">
                <h5 class="card-title">${city}</h5>
                <h6>Temperatura: ${Math.round(temp)}°C.</h6>
                <h6>Odczuwalne: ${Math.round(tempFeel)}°C.</h6>
                <h6>Ciśnienie: ${pressure} hpa.</h6>
                <h6>Wilgotność: ${humidity}%.</h6>
                <p class="card-text, text-capitalize">${description}</p>
            </div>
        </div>
          `;

	})
	.catch(function() {
		console.log("error weather");
	})
}
const search = document.getElementById("searchCity");
const button = document.getElementById("submit");

button.addEventListener("click", () => {
    getWeather(search.value);
});



