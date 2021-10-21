window.onload = function() {
	getCovidStats(213);
}

function getCovidStats(inputCovid) {
	fetch(`https://coronavirus-tracker-api.herokuapp.com/v2/locations/${inputCovid}`)
	.then(function(resp) { return resp.json() })
	.then(function(data) {
		console.log(data);
		let confirmedCases = data.location.latest.confirmed;
		let update = data.location.last_updated;
		let deaths = data.location.latest.deaths;
		let country = data.location.country;
		let population = data.location.country_population;

		document.getElementById("covid").innerHTML = `
		<div class="card mx-auto mt-5">
			<div class="card-header">
				<span id="country"><h3>Kraj: ${country}</h3></span>
			</div>
			<ul class="list-group list-group-flush">
				<li class="list-group-item"><span id="population">Populacja: ${population}</span></li>
				<li class="list-group-item"><span id="confirmed">Potwierdzone: ${confirmedCases}</span></li>
				<li class="list-group-item"><span id="deaths">Zgony: ${deaths}</span></li>
				<li class="list-group-item"><span id="updated">Ostatnia aktualizacja: ${update.substr(0,10)}</span></li>
			</ul>
		</div>
		`;

	})
	.catch(function() {
		console.log("error");
	})
}