function getBitcoin() {
	fetch("https://bravenewcoin.p.rapidapi.com/market-cap?assetId=f1ff77b6-3ab4-4719-9ded-2fc7e71cff1f&percentChange=true", {
	"method": "GET",
	"headers": {
		"authorization": "Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Ik5EVXhNRGhHT0VReE56STVOelJCTTBJM1FrUTVOa0l4TWtRd1FrSTJSalJFTVRaR1F6QTBOZyJ9.eyJpc3MiOiJodHRwczovL2F1dGguYnJhdmVuZXdjb2luLmNvbS8iLCJzdWIiOiJvQ2RRb1pvSTk2RVJFOUhZM3NRN0ptYkFDZkJmNTVSWUBjbGllbnRzIiwiYXVkIjoiaHR0cHM6Ly9hcGkuYnJhdmVuZXdjb2luLmNvbSIsImlhdCI6MTYzNDk0NjEyNywiZXhwIjoxNjM1MDMyNTI3LCJhenAiOiJvQ2RRb1pvSTk2RVJFOUhZM3NRN0ptYkFDZkJmNTVSWSIsInNjb3BlIjoicmVhZDppbmRleC10aWNrZXIgcmVhZDpyYW5raW5nIHJlYWQ6bXdhIHJlYWQ6Z3dhIHJlYWQ6YWdncmVnYXRlcyByZWFkOm1hcmtldCByZWFkOmFzc2V0IHJlYWQ6b2hsY3YgcmVhZDptYXJrZXQtY2FwIiwiZ3R5IjoiY2xpZW50LWNyZWRlbnRpYWxzIn0.TChlzGO-fQeu4vOWR-gk_PXDAUpSWMtFyLmKaK63Ytcz1m3ICnzQMs-1vTbS0yRUMFxBQaNRnhylQ6NdLVXQc0Wa4cuTRRYwbh8Qpw_hbtWTzTVeIhoVoHpJWv9N_OTy4hFNp4-AtE9W7SXPqq-mjceEjm-QpQYl8mfhsG05LX8DiNer-7ZlcGutWS6-oBVAwd7Ow9bpM9s89kkN6xMSiKdR4PiCGJAs6rCnpoKDnON_Gz8lFPt9fLqkfN4R68xpqTgDURsKwwBEsyk1u1SSXdQ1HzgcI-Ive5Ox0jUe3LxJXQ2bOWDDruADgDSvb50rh7rI0obobWnm5xIdWFToQg",
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
		console.log("error");
	})
}