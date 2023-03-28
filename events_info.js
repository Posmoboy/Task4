let ApiEvents = "https://mindhub-xj03.onrender.com/api/amazing"



async function gettingApidata() {

  try {
    const response = await fetch(ApiEvents);
    const getEvents = await response.json();
  

    console.log(getEvents);

    dataEventsApi = getEvents.events;
    console.log(dataEventsApi);
    ArrayIndex = dataEventsApi;
    console.log(ArrayIndex);
    query = location.search;
    console.log(query);
    params = new URLSearchParams(query);
    console.log(params);
    idParams = params.get("id");
    console.log(idParams)
    ArrayIndexDetalles = dataEventsApi;
    console.log(ArrayIndexDetalles);

  }
  catch (error) {
    console.log(error);
  }

}

gettingApidata()


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
  setTimeout(function () {
    const EventsDetalles = document.getElementById("events_info");
    resolver(EventsDetalles);
  }, 1000);
  setTimeout(function () {
    let html = " ";
    resolver(html);
  }, 1000);
});


promesa.then(function (InfoCards) {
  function InfoCards() {
    let html = ``;
    const EventsDetalles = document.getElementById("events_info");
    let detallesE = ArrayIndexDetalles.find(element => element._id == idParams);
    
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
                        <a href="./events_info.html?id=${detallesE._id}" class="btn btn-primary">More info</a>
                    </div>
                </div>
    `;
  
    EventsDetalles.innerHTML = html
    console.log(EventsDetalles)
  };

  return InfoCards();
});
  
  




//************************* */









// let query = location.search;

// let params = new URLSearchParams(query);

// let idParams = params.get("id");

// let ArrayIndexDetalles = data.events


// let detallesE = ArrayIndexDetalles.find(element => element._id == idParams);
// console.log(detallesE)


// const EventsDetalles = document.getElementById("events_info");


// let html = " ";

// html += `
//         <div class="card col">
//         <img src="${detallesE.image}" class="card-img-top" alt="${detallesE.name}">
//         <div class="card-body">
//             <h5><mark>Category:</mark></h5><p>${detallesE.category}</p>
//             <h5 class="card-title"><mark>${detallesE.name}</mark></h5>
//             <p class="card-text">${detallesE.description}</p>
//             <p class="card-text h5 "><mark>Date:</mark></p>
//             <p class="card-text">${detallesE.date}</p>
//             <p class="card-text h5"><mark>Place:</mark></p>
//             <p class="card-text">${detallesE.place}</p>
//             <p class="card-text h5"><mark>Price:</mark></p>
//             <p class="card-text">${detallesE.price}</p>
//         </div>
//         </div>
//             `;

// EventsDetalles.innerHTML = html;

