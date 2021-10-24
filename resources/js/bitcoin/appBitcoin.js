function getBitcoin() {
	fetch("https://api.coindesk.com/v1/bpi/currentprice.json")
	.then(function(resp) { return resp.json() })
	.then(function(data) {
        // console.log(data);

		let bEUR = data.bpi.EUR.rate_float;
		let bEURSymbol = data.bpi.EUR.symbol;
		let bGBP = data.bpi.GBP.rate_float;
		let bGBPSymbol = data.bpi.GBP.symbol;
		let bUSD = data.bpi.USD.rate_float;
		let bUSDSymbol = data.bpi.USD.symbol;
		let update = data.time.updated;

		document.getElementById("bitcoin").innerHTML = `
        <div class="card mx-auto mt-5">
			<div class="card-header">
				<h3>Bitcoin</h3>
			</div>
			<ul class="list-group list-group-flush">
				<li class="list-group-item">Cena EURO: ${bEUR.toFixed(2)}${bEURSymbol}</li>
				<li class="list-group-item">Cena FUNTY: ${bGBP.toFixed(2)}${bGBPSymbol}</li>
				<li class="list-group-item">Cena USD: ${bUSD.toFixed(2)}${bUSDSymbol}</li>
				<li class="list-group-item">Ostatnia aktualizacja: ${update}</li>
			</ul>
		</div>
		`;

	})
	.catch(function() {
		console.log("error bitcoin");
	})
}