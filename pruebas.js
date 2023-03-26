let ApiEvents = "https://mindhub-xj03.onrender.com/api/amazing"



async function gettingApidata() {

  try {
    const response = await fetch(ApiEvents);
    const getEvents = await response.json();

    console.log(getEvents);

    CurrentDateApi = getEvents.currentDate

    dataEventsApi = getEvents.events

    CurrentDate = CurrentDateApi;

    ArrayIndex = dataEventsApi;

    query = location.search;

    params = new URLSearchParams(query);

    idParams = params.get("id");

    ArrayIndexDetalles = dataEventsApi;

  }
  catch (error) {
    console.log(error);
  }

}

gettingApidata()

let CurrentDateApi = []

let dataEventsApi = []


const promesa = new Promise(function (resolver, rechazar) {
  setTimeout(function () {
    let query = location.search;
    resolver(query);
  }, 1000);
  setTimeout(function () {
    let params = new URLSearchParams(query);
    resolver(params);
  }, 1000);
  setTimeout(function () {
    let idParams = params.get("id");
    resolver(idParams);
  }, 1000);
  setTimeout(function () {
    let ArrayIndexDetalles = dataEventsApi;
    resolver(ArrayIndexDetalles);
  }, 1000);
  setTimeout(function () {
    let detallesE = ArrayIndexDetalles.find(element => element._id == idParams);
    resolver(detallesE);
  }, 1000);
});


promesa.then(function (html) {
  let html = " ";
  html += `
        <div class="card col">
        <img src="${detallesE.image}" class="card-img-top" alt="${detallesE.name}">
        <div class="card-body">
            <h5><mark>Category:</mark></h5><p>${detallesE.category}</p>
            <h5 class="card-title"><mark>${detallesE.name}</mark></h5>
            <p class="card-text">${detallesE.description}</p>
            <p class="card-text h5 "><mark>Date:</mark></p> 
            <p class="card-text">${detallesE.date}</p>
            <p class="card-text h5"><mark>Place:</mark></p>
            <p class="card-text">${detallesE.place}</p>
            <p class="card-text h5"><mark>Price:</mark></p>
            <p class="card-text">${detallesE.price}</p>
        </div>
        </div>
            `;

EventsDetalles.innerHTML = html;

});

const EventsDetalles = document.getElementById("events_info");




