async function foo() {
  var container = document.createElement("div");
  container.className = "container";
container.innerHTML = `<h1 class ="text-center" id="title">Rest Countries Weather<h1>`;
  var row = document.createElement("div");
  row.className = "row";

 

  try {
    let data = await fetch("https://restcountries.com/v3.1/all");
    let res = await data.json();
    console.log(res);
    for (var i = 0; i < res.length; i++) {
      var col = document.createElement("div");
      col.className = "col-lg-4";
      col.innerHTML = `<div class="card border-dark mb-3" style="max-width: 18rem;">
  <div class="card-header text-center">${res[i].name.common}</div>
  <div class="card-body text-center">
    <img src="${res[i].flags.png}" class="card-img-top img-fluid" alt="${res[i]}">
    <p class="card-text">Capital: ${res[i].capital}</p>
    <p class="card-text">Region: ${res[i].region}</p>
    <p class="card-text">Country Code: ${res[i].cioc}</p>
    <p class="card-text">Latitude: ${res[i].latlng[0]}</p>
    <p class="card-text">Longitude: ${res[i].latlng[1]}</p>
    <button type="button" class="btn btn-outline-light weather-btn " data-lat="${res[i].latlng[0]}" data-lon="${res[i].latlng[1]}">Click for Weather</button>
  </div>`;
      row.append(col);
      container.append(row);
      document.body.append(container);
    }
    var weatherButtons = document.querySelectorAll(".weather-btn");
    weatherButtons.forEach(function (button) {
      button.addEventListener("click", async function () {
        var lat = this.getAttribute("data-lat");
        var lon = this.getAttribute("data-lon");
        var temperature = await Weather(lat, lon);
        var cardBody = this.parentElement;
        var temperatureElement = document.createElement("p");
        temperatureElement.textContent = `Temperature: ${temperature}°C`;
        cardBody.replaceChild(temperatureElement, this);
      });
    });
  } catch (error) {
    console.log(error);
  }
}
foo();

async function Weather(lat, lon, button) {
  let data = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=3fdb46d68715c1511c6c2a05647e4ab9`
  );
  let data1 = await data.json();
  return (data1.main.temp - 273.15).toFixed(2);git
}
