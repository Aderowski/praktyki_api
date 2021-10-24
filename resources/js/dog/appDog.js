function getDog() {
	fetch(`https://dog.ceo/api/breeds/image/random`)
	.then(function(resp) { return resp.json() })
	.then(function(data) {
        console.log(data)
        let link = data.message;
		document.getElementById("dog").innerHTML = `
        <div class="card mx-auto mt-5">
            <img src=${link} alt="pies">
        </div>
		`;
	})
	.catch(function() {
		console.log("error dog");
	})
}
let przyciskPies = document.getElementById("ChangeDog");
przyciskPies.addEventListener("click", () => {
    getDog();
});