let ApiEvents = "https://mindhub-xj03.onrender.com/api/amazing"



async function gettingApidata() {

  try {
    const response = await fetch(ApiEvents);
    const getEvents = await response.json();

    console.log(getEvents);

    CurrentDateApi = getEvents.currentDate
    console.log(CurrentDateApi);
    dataEventsApi = getEvents.events
    console.log(dataEventsApi);
    CurrentDate = CurrentDateApi;
    console.log(CurrentDate);
    ArrayIndex = dataEventsApi;
    console.log(ArrayIndex);
  


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
    let CurrentDate = CurrentDateApi;
    resolver(CurrentDate);
  }, 1000);
  setTimeout(function () {
    let ArrayIndex = dataEventsApi;
    resolver(ArrayIndex);
  }, 1000);
  setTimeout(function () {
    let ArrayIndex = dataEventsApi;
    resolver(ArrayIndex);
  }, 1000);
});

promesa.then(function (CurrentDate) {
  console.log(CurrentDate);
});


promesa.then(function (ArrayIndex) {
  console.log(ArrayIndex);
});


promesa.then(function (EventsFilterDateAfter) {

  function EventsFilterDateAfter(ArrayIndex) {
    for (let i = 0; i < ArrayIndex.length; i++) {
      if (ArrayIndex[i].date > CurrentDate) {
        ArrayFilterAfter.push(ArrayIndex[i])
      }
    }
  }

  return EventsFilterDateAfter(ArrayIndex);
});

promesa.then(function (AddingCards) {

  function AddingCards(ArrayFilterAfter) {
    let card = ``;
    const BootsCards = document.getElementById("MainCards");
    ArrayFilterAfter.forEach((element) => {
      card += `
     <div class="card col">
                    <img src="${element.image}" class="card-img-top" alt="${element.name}">
                    <div class="card-body">
                        <h5><mark>Category:</mark></h5><p>${element.category}</p>
                        <h5 class="card-title"><mark>${element.name}</mark></h5>
                        <p class="card-text">${element.description}</p>
                        <p class="card-text h5 "><mark>Date:</mark></p> 
                        <p class="card-text">${element.date}</p>
                        <p class="card-text h5"><mark>Place:</mark></p>
                        <p class="card-text">${element.place}</p>
                        <p class="card-text h5"><mark>Price:</mark></p>
                        <p class="card-text">${element.price}</p>
                        <a href="./events_info.html?id=${element._id}" class="btn btn-primary">More info</a>
                    </div>
                </div>
    `;
    })
    BootsCards.innerHTML = card
    console.log(BootsCards)
  };

  return AddingCards(ArrayFilterAfter);
});


promesa.then(function (CheckboxDinamicos) {
  function CheckboxDinamicos(_arrayparams) {
    let checkBox = ``;
    let allCategories = _arrayparams.map(element => element.category)
    let Categories = new Set(allCategories)
    const CheckboxCards = document.getElementById("checkboxesUpcoming");
    Categories.forEach((element) => {
      checkBox += `
      <div>
      <input class="form-check-input" type="checkbox" value=${element} id=${element}>
      <label class="form-check-label" for=${element}>
      ${element}
      </label>
      </div>
      `;
    })
    CheckboxCards.innerHTML = checkBox
  };


  return CheckboxDinamicos(ArrayFilterAfter);
});

promesa.then(function(SearchFilter){
  function SearchFilter(Arraydatos, texto) {
    let ArrayFiltrado = Arraydatos.filter(element =>
      element.name.toLowerCase().includes(texto.toLowerCase()))
    return ArrayFiltrado
  };  
  console.log(SearchFilter)
 return SearchFilter
});

promesa.then(function(CheckboxsFilter){
  function CheckboxsFilter(_arrayparams) {
    let CheckBoxesUpcomingFilter = document.querySelectorAll("input[type='checkbox']")
    console.log(CheckBoxesUpcomingFilter);
    let arrayChecks = Array.from(CheckBoxesUpcomingFilter)
    console.log(arrayChecks);
    let checkChecked = arrayChecks.filter(check => check.checked)
    console.log(checkChecked);
    if(checkChecked.length == 0){
      return _arrayparams
    }
    let checkValue = checkChecked.map(check => check.value)
    console.log(checkValue);
    let arrayChecksFilter = _arrayparams.filter(element => checkValue.includes(element.category))
    console.log(arrayChecksFilter)
    return arrayChecksFilter
  };
  return CheckboxsFilter
});

promesa.then(function(FiltrosCruzados){
  function FiltrosCruzados(){
    let arrayChecksFilter = CheckboxsFilter(ArrayFilterAfter)
     let ArrayFiltrado = SearchFilter(arrayChecksFilter, input.value)
    AddingCards(ArrayFiltrado)
  };
  return FiltrosCruzados(ArrayFilterAfter);
});

promesa.then(function(input){
  input.addEventListener('input', FiltrosCruzados)
});

promesa.then(function(checkboxesUpcoming){
  checkboxesUpcoming.addEventListener('change', FiltrosCruzados);
});







let ArrayFilterAfter = []

let ArrayFilterBefore = []

const input = document.getElementById('SearchButtonUpcomin');

const checkboxesUpcoming = document.getElementById("checkboxesUpcoming");

const SearchCards = document.getElementById("MainCards");



