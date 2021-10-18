class WindowUI {

    constructor() {
      this.uiContainer = document.getElementById("content");
      this.city;
      this.defaultCity = "Warszawa";
    }
  
    window(data) {
      //wyswietla okienko z informacjami
      this.uiContainer.innerHTML = `
          
          <div class="card mx-auto mt-5">
              <div class="card-body justify-content-center">
                  <h5 class="card-title">${data.name}</h5>
                  <h6>Temperatura: ${Math.round(data.main.temp)}°C.</h6>
                  <h6>Odczuwalne: ${Math.round(data.main.feels_like)}°C.</h6>
                  <h6>Ciśnienie: ${data.main.pressure} hpa.</h6>
                  <h6>Wilgotność: ${data.main.humidity}%.</h6>
                  <p class="card-text, text-capitalize">${data.weather[0].description}</p>
              </div>
          </div>
          `;
    }
  
    //zapisuje miasto do pamieci lokalnej
    saveToLS(data) {
      localStorage.setItem("city", JSON.stringify(data));
    }
  
    //pobiera z pamieci lokalnej miasto, jezeli nie znajduje to ustawia default (Warszawa)
    getFromLS() {
      if (localStorage.getItem("city" == null)) {
        return this.defaultCity;
      } else {
        this.city = JSON.parse(localStorage.getItem("city"));
      }
      return this.city;
    }
  
    //czysci pamiec lokalna
    clearLS() {
      localStorage.clear();
    }
  }
  