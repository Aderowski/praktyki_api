window.onload = function() {
	getCovidStats(213);
}

function getCovidStats(inputCovid) {
	fetch(`https://coronavirus-tracker-api.herokuapp.com/v2/locations/${inputCovid}`)
	.then(function(resp) { return resp.json() })
	.then(function(data) {

		let confirmedCases = data.location.latest.confirmed;
		let update = data.location.last_updated;
		let deaths = data.location.latest.deaths;
		let country = data.location.country;
		let population = data.location.country_population;

		document.getElementById("covid").innerHTML = `
		<div class="card mx-auto mt-5">
			<div class="card-header">
				<h3>Kraj: ${country}</h3>
			</div>
			<ul class="list-group list-group-flush">
				<li class="list-group-item">Populacja: ${population}</li>
				<li class="list-group-item">Potwierdzone: ${confirmedCases}</li>
				<li class="list-group-item">Zgony: ${deaths}</li>
				<li class="list-group-item">Ostatnia aktualizacja: ${update.substr(0,10)}</li>
			</ul>
		</div>
		`;

	})
	.catch(function() {
		console.log("error");
	})
}