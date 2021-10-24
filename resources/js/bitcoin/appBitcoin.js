function getBitcoin() {
	fetch("https://bravenewcoin.p.rapidapi.com/market-cap?assetId=f1ff77b6-3ab4-4719-9ded-2fc7e71cff1f&percentChange=true", {
		"method": "GET",
		"headers": {
			"authorization": "Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Ik5EVXhNRGhHT0VReE56STVOelJCTTBJM1FrUTVOa0l4TWtRd1FrSTJSalJFTVRaR1F6QTBOZyJ9.eyJpc3MiOiJodHRwczovL2F1dGguYnJhdmVuZXdjb2luLmNvbS8iLCJzdWIiOiJvQ2RRb1pvSTk2RVJFOUhZM3NRN0ptYkFDZkJmNTVSWUBjbGllbnRzIiwiYXVkIjoiaHR0cHM6Ly9hcGkuYnJhdmVuZXdjb2luLmNvbSIsImlhdCI6MTYzNTAyMzg4OCwiZXhwIjoxNjM1MTEwMjg4LCJhenAiOiJvQ2RRb1pvSTk2RVJFOUhZM3NRN0ptYkFDZkJmNTVSWSIsInNjb3BlIjoicmVhZDppbmRleC10aWNrZXIgcmVhZDpyYW5raW5nIHJlYWQ6bXdhIHJlYWQ6Z3dhIHJlYWQ6YWdncmVnYXRlcyByZWFkOm1hcmtldCByZWFkOmFzc2V0IHJlYWQ6b2hsY3YgcmVhZDptYXJrZXQtY2FwIiwiZ3R5IjoiY2xpZW50LWNyZWRlbnRpYWxzIn0.pf2j46_yT3tFAeCk5N_PgCNbRt85g2scU67l7DXzO-S7kJk-ZdScMQ9hH9ik8xSUncpBJw3eJ269Qttva0Tlys3XQj_meWRhZqmK_eWU9Eay4NHFrfxwdtFIthDxOs80bQ8xxfCPAtuA0s0-EM0nJiNRSWHzgdEO6KUE_JgVqNuWvJk7y2a0hQ6jZ9H_fu8gYtRHIArMC0lo4FHV9NXASWAQCqYrEMD-k90P79XfjDV7Bcq_Lr7ux4Bxc6H61GLW22EWFggBtxRUaoUcFR60S0ludmgJj4BAafW3FqiyQttAGRDl-lLaz8XtKdaQ4ATpjUKTCTnS8LiKKlDgvIxM0A",
			"x-rapidapi-host": "bravenewcoin.p.rapidapi.com",
			"x-rapidapi-key": "1c57538ebdmsh029722799923561p17f6f8jsn94450dfaa5ad"
		}
    }).then(function(resp) { return resp.json() })
	.then(function(data) {
        console.log(data);
		let price = data.content[0].price;
		let change24h = data.content[0].pricePercentChange.change24h;
		let change7d = data.content[0].pricePercentChange.change7d;
		let change30d = data.content[0].pricePercentChange.change30d;

		document.getElementById("bitcoin").innerHTML = `
        <div class="card mx-auto mt-5">
			<div class="card-header">
				<h3>Bitcoin na USD</h3>
			</div>
			<ul class="list-group list-group-flush">
				<li class="list-group-item">Cena: ${price.toFixed(2)}$</li>
				<li class="list-group-item">Zmiana w 24h: ${change24h}%</li>
				<li class="list-group-item">Zmiana w 7d: ${change7d}%</li>
				<li class="list-group-item">Zmiana w 30d: ${change30d}%</li>
			</ul>
		</div>
		`;

	})
	.catch(function() {
		console.log("error bitcoin");
	})
}