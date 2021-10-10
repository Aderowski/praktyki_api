class Fetch {
    async getCurrent(input) {
      const myKey = "1aa6e284241189dac91259c99cc32022";
  
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${input}&lang=pl&units=metric&appid=${myKey}`
      );
  
      const data = await response.json();
  
      console.log(data);
  
      return data;
    }
  }
  