// let ApiEvents = "https://mindhub-xj03.onrender.com/api/amazing"



// async function gettingApidata() {

//     try {
//         const response = await fetch(ApiEvents);
//         const getEvents = await response.json();

//         console.log(getEvents);

//         CurrentDateApi = getEvents.currentDate
//         console.log(CurrentDateApi);
//         dataEventsApi = getEvents.events
//         console.log(dataEventsApi);
            
//     }
//     catch (error) {
//         console.log(error);
//             }
        
// }

// gettingApidata()

// let CurrentDateApi = []

// let dataEventsApi = []



//*************probar**********/

// function saludos(){
//   console.log("Hola Mundo");
// }

// setTimeout(saludos, 3000);

// const promesa = new Promise(function(resolver, rechazar) {
//   setTimeout(function() {
//    const suma = 4 + 5;
//    resolver(suma);
//   }, 2000);
//  });
 
//  promesa.then(function(resultado) {
//   console.log(resultado); // 9
//  });
 
//  promesa.then(function(resultado) {
//  console.log('Primer manejador .then');
//  return resultado;
// }).then(function(resultado) {
//  console.log('Segundo manejador .then');
//  console.log(resultado);
// }).catch(function(error) {
//  console.log(error);
// });


                 //****//


// const Apipromise = new Promise(function(resolver, rechazar) {
//   (function() {
//    let CurrentDate = CurrentDateApi;
//    let ArrayIndex = dataEventsApi;
//    let ArrayFilterAfter = [];
//    let ArrayFilterBefore = [];
//    resolver(CurrentDate, ArrayIndex, ArrayFilterAfter, ArrayFilterBefore);
//   });
//  });
 
//  promesa.then(function(resultado) {
//   function EventsFilterDateBefore(ArrayIndex) {
//   for (let i = 0; i < ArrayIndex.length; i++) {
//     if (ArrayIndex[i].date < CurrentDate) {
//       ArrayFilterBefore.push(ArrayIndex[i])
//     }
//   }
// };
// EventsFilterDateBefore(ArrayIndex);
//  });
 
//  promesa.then(function(resultado) {
//  function EventsFilterDateAfter(ArrayIndex) {
//   for (let i = 0; i < ArrayIndex.length; i++) {
//     if (ArrayIndex[i].date > CurrentDate) {
//       ArrayFilterAfter.push(ArrayIndex[i])
//     }
//   }
// };
//  EventsFilterDateAfter(ArrayIndex);
// });
//  promesa.then(function(resultado) {
//  function AddingCards(ArrayIndex){
//   let card = ``;
//   const BootsCards = document.getElementById("MainCards");
// ArrayIndex.forEach((element) => {
//     card += `
//      <div class="card col">
//                     <img src="${element.image}" class="card-img-top" alt="${element.name}">
//                     <div class="card-body">
//                         <h5><mark>Category:</mark></h5><p>${element.category}</p>
//                         <h5 class="card-title"><mark>${element.name}</mark></h5>
//                         <p class="card-text">${element.description}</p>
//                         <p class="card-text h5 "><mark>Date:</mark></p> 
//                         <p class="card-text">${element.date}</p>
//                         <p class="card-text h5"><mark>Place:</mark></p>
//                         <p class="card-text">${element.place}</p>
//                         <p class="card-text h5"><mark>Price:</mark></p>
//                         <p class="card-text">${element.price}</p>
//                         <a href="./events_info.html?id=${element._id}" class="btn btn-primary">More info</a>
//                     </div>
//                 </div>
//     `;
// })
// BootsCards.innerHTML = card
// console.log(BootsCards)
// };
//  AddingCards(ArrayIndex); 
// }); promesa.then(function(resultado) {
//  const CheckboxCardsIndex = document.getElementById("checkboxesIndex");

// function CheckboxDinamicos(_arrayparams) {
//   let checkBox = ``;
//   let allCategories = _arrayparams.map(element => element.category)
//   let Categories = new Set(allCategories)
//   const CheckboxCards = document.getElementById("checkboxesIndex");
//   Categories.forEach((element) => {
//     checkBox += `
//     <div>
//     <input class="form-check-input" type="checkbox" value=${element} id=${element}>
//     <label class="form-check-label" for=${element}>
//     ${element}
//     </label>
//     </div>
//     `;
// })
// CheckboxCards.innerHTML = checkBox
// };
//  CheckboxDinamicos(ArrayIndex);
// }).catch(function(error) {
//  console.log(error);
// });





//**********<<<<<>>>>>*************/