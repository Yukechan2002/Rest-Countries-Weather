async function foo() {
  var container = document.createElement("div");
  container.className = "container";

  var row = document.createElement("div");
  row.className = "row";

  var heading = document.createElement("h1");
  heading.className = "head";
  heading.innerHTML = `Rest Countries Weather`;

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
    <img src="${res[i].flags.png}" class="card-img-top" alt="${res[i]}">
    <p class="card-text">Capital: ${res[i].capital}</p>
    <p class="card-text">Region: ${res[i].region}</p>
    <p class="card-text">Country Code: ${res[i].cioc}</p>
    <p class="card-text">Latitude: ${res[i].latlng[0]}</p>
    <p class="card-text">Longitude: ${res[i].latlng[1]}</p>
    <button type="button" class="btn btn-outline-light weather-btn" data-lat="${res[i].latlng[0]}" data-lon="${res[i].latlng[1]}">Click for Weather</button>
  </div>`;

      row.append(col);
      container.append(heading, row);
      document.body.append(container);
    }
    
  } catch (error) {
    console.log(error);
  }
}
foo();


