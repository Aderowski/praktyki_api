window.onload = function() {
	getBitcoin();
}

function getBitcoin() {
	fetch("https://bravenewcoin.p.rapidapi.com/market-cap?assetId=f1ff77b6-3ab4-4719-9ded-2fc7e71cff1f&percentChange=true", {
	"method": "GET",
	"headers": {
		"authorization": "Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Ik5EVXhNRGhHT0VReE56STVOelJCTTBJM1FrUTVOa0l4TWtRd1FrSTJSalJFTVRaR1F6QTBOZyJ9.eyJpc3MiOiJodHRwczovL2F1dGguYnJhdmVuZXdjb2luLmNvbS8iLCJzdWIiOiJvQ2RRb1pvSTk2RVJFOUhZM3NRN0ptYkFDZkJmNTVSWUBjbGllbnRzIiwiYXVkIjoiaHR0cHM6Ly9hcGkuYnJhdmVuZXdjb2luLmNvbSIsImlhdCI6MTYzNDc5MDYwNywiZXhwIjoxNjM0ODc3MDA3LCJhenAiOiJvQ2RRb1pvSTk2RVJFOUhZM3NRN0ptYkFDZkJmNTVSWSIsInNjb3BlIjoicmVhZDppbmRleC10aWNrZXIgcmVhZDpyYW5raW5nIHJlYWQ6bXdhIHJlYWQ6Z3dhIHJlYWQ6YWdncmVnYXRlcyByZWFkOm1hcmtldCByZWFkOmFzc2V0IHJlYWQ6b2hsY3YgcmVhZDptYXJrZXQtY2FwIiwiZ3R5IjoiY2xpZW50LWNyZWRlbnRpYWxzIn0.AdgcLOD53HmdKdWgBXmsi3TiE_Htyh22Q9fshVGsstujzDmCuzOgHvHo_0Yej3pVzMFVuwqjF2cbo2wxYCPHJgLcT6vRqvOzFiwkc7vmeHkU4UKNdmj1QReEYnaVXj5-IdBArU293UdlRkaf3KICzrDk--ub4EZumN7mjX5vPuXsdUPLFyZ8t7RG4c8bt_ZMUuYMQx8D-1R5BHF-k0yOqxTcWQ2w_8ieXsI3bhww0od-dtUQRx-gYRQK_z-ctWfBN0M_EH_IjV-G2VyFOHeUMcgtVV-tgQSYcYuNKqKfz1GE7cDUfbDMcEhRW1gLmHs2pVfUXsetB9BZ99KxA4XgjA",
		"x-rapidapi-host": "bravenewcoin.p.rapidapi.com",
		"x-rapidapi-key": "1c57538ebdmsh029722799923561p17f6f8jsn94450dfaa5ad"
	    }
    }).then(function(resp) { return resp.json() })
	.then(function(data) {
        console.log(data);
        

		document.getElementById("bitcoin").innerHTML = `
        <div class="card mx-auto mt-5">
			<div class="card-header">
				<h3>Kraj: Bitcoin na USD</h3>
			</div>
			<ul class="list-group list-group-flush">
				<li class="list-group-item">Cena: </li>
				<li class="list-group-item">Zmiana w 24h:%</li>
				<li class="list-group-item">Zmiana w 7d: %</li>
				<li class="list-group-item">Zmiana w 30d: %</li>
			</ul>
		</div>
		`;

	})
	.catch(function() {
		console.log("error");
	})
}