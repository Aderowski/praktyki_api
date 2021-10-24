function getCat() {
	fetch(`https://api.thecatapi.com/v1/images/search`)
	.then(function(resp) { return resp.json() })
	.then(function(data) {
        console.log(data)
        let linkCat = data[0].url;
		document.getElementById("cat").innerHTML = `
        <div class="card mx-auto mt-5">
            <img src=${linkCat} alt="kot">
        </div>
		`;
	})
	.catch(function() {
		console.log("error cat");
	})
}
let przyciskKot = document.getElementById("ChangeCat");
przyciskKot.addEventListener("click", () => {
    getCat();
});