const input = document.getElementById('#SearchBar');

const SearchButton = document.getElementById('#SearchButtonUpcoming');

const BootsCards = document.getElementById("#MainCards");

input.addEventListener('keyup', SearchFilter)
SearchButton.addEventListener('click', SearchFilter)

const SearchFilter = ()=>{
  BootsCards.innerHTML = '';
  
  const SearchText = input.value.toLowerCase();
     for(let event of data.events){
      let Name = event.name.toLowerCase();
      if(Name.indexOf(SearchText)!== -1){
        BootsCards.innerHTML += `
        <div class="card col">
                    <img src="${event.image}" class="card-img-top" alt="${event.name}">
                    <div class="card-body">
                        <h5><mark>Category:</mark></h5><p>${event.category}</p>
                        <h5 class="card-title"><mark>${event.name}</mark></h5>
                        <p class="card-text">${event.description}</p>
                        <p class="card-text h5 "><mark>Date:</mark></p> 
                        <p class="card-text">${event.date}</p>
                        <p class="card-text h5"><mark>Place:</mark></p>
                        <p class="card-text">${events.place}</p>
                        <p class="card-text h5"><mark>Price:</mark></p>
                        <p class="card-text">${event.price}</p>
                        <a href="./events_info.html?id=${event._id}" class="btn btn-primary">More info</a>
                    </div>
                </div>
        
        `
      }
     }
     if (BootsCards.innerHTML = '') {
      BootsCards.innerHTML = `
      <h1 class="text-bg-info p-3">Event not found</h1>
      `
      
     }

}


//**************************code para probar*************************






// document.addEventListener("keyup", e=>{

//   if (e.target.matches("#SearchBar")){

//       if (e.key ==="Escape")e.target.value = ""

//       document.querySelectorAll(".card-body").forEach(Cards =>{

//           Cards.textContent.toLowerCase().includes(e.target.value.toLowerCase())
//             ?Cards.classList.remove("filtro")
//             :Cards.classList.add("filtro")
//       })

//   }


// })

// document.addEventListener("keyup", e=>{

//   if (e.target.matches("#buscador")){

//       if (e.key ==="Escape")e.target.value = ""

//       document.querySelectorAll(".articulo").forEach(fruta =>{

//           fruta.textContent.toLowerCase().includes(e.target.value.toLowerCase())
//             ?fruta.classList.remove("filtro")
//             :fruta.classList.add("filtro")
//       })

//   }


// })

//**************************Search Bar code*************************




console.log(input)

// input.addEventListener('keyup', ()=>{
//  console.log("escribiendo en la barra de busqueda")
// })

// input.addEventListener('input', ()=>{
// let CardsEventsMatch = SearchBarFilterAfter(ArrayFilterAfter, input.value)
// AddingCards(CardsEventsMatch)
// })


// console.log(input)

// input.addEventListener('click', MixFilter);

// input.addEventListener('click', ()=>{
//   let CardsEventsMatch = SearchBarFilterAfter(ArrayFilterAfter, input.value)
//   AddingCards(CardsEventsMatch)
// })

// function SearchBarFilterAfter (arrayDatos, text){
//     let CardsEventsMatch = arrayCardsEvents.filter(element =>
//         element.name.toLowerCase().includes(text.toLowerCase()))
//      return CardsEventsMatch
// }



//*************************Checkboox code***************************


// const flexCheckUpcoming = document.getElementById('checkboxesUpcoming');


// const checkClass = document.getElementsByClassName('form-check-input')

// flexCheckUpcoming.addEventListener('change', ()=>{
//   console.log("Clickendo checkboxes");
//   })

// console.log(checkClass);

// console.log(flexCheckUpcoming)

// flexCheckUpcoming.addEventListener('change', ()=>{
//   let CardsEventsMatch2 = CheckboxFilterUpcoming(ArrayFilterAfter)
//   AddingCards(CardsEventsMatch2)
//   })

// flexCheckUpcoming.addEventListener('change', ()=>{
//   let ArrayCheckFiltered = CheckboxFilterUpcoming(ArrayFilterAfter)
//   let ArrayCheckFiltered2 = SearchBarFilterAfter (ArrayCheckFiltered)
//   AddingCards(ArrayCheckFiltered2)
// });

// const CheckboxCards = document.getElementById("checkboxes");

// function CheckboxDinamicos(_arrayparams) {
//   let checkBox = ``;
//   let allCategories = _arrayparams.map(element => element.category)
//   let Categories = new Set(allCategories)
//   const CheckboxCards = document.getElementById("checkboxes");
//   Categories.forEach((element) => {
//     checkBox += `
//     <div class="col justify-content-start">
//     <input class="form-check-input" type="checkbox" value="cat1" id="flexCheckUpcoming1">
//     <label class="form-check-label" for="flexCheckDefault">
//     ${element}"
//     </label>
//     `;
// })
// CheckboxCards.innerHTML = checkBox
// };

// function CheckboxFilterUpcoming(params) {
//   let CheckBoxesUpcomingFilter = document.getElementById("checkboxesUpcoming[type='checkbox']")
//   let arrayChecks = Array.from(CheckBoxesUpcomingFilter)
//   let checkChecked = arrayChecks.filter(check => check.checked)
//   if(checkChecked.length == 0){
//     return params
//   }
//   let checkValue = checkChecked.map(check => check.value)
//   let arrayChecksFilter = params.filter(element => checkValue.includes(element.category))
//   return arrayChecksFilter
// }

//*************Mix filter code ***************/

// function MixFilter () {
//   let CardsEventsMatch = SearchBarFilterAfter(ArrayFilterAfter, input.value)
//   let CardsEventsMatch2 = CheckboxFilterUpcoming (CardsEventsMatch)
//   AddingCards(CardsEventsMatch2)
// }