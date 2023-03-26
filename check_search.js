let CheckSelector = document.getElementsByClassName("form-check-input")
let array_category = ArrayIndex.category

function imprimirChecks(_CheckSelector, array_category) {
    let container = document.querySelector(_CheckSelector)
    array_category = array_category.map(each=> {
    return `
    <div class="col-1 justify-content-start">
                <input onclick="busquedaData()" class="form-check-input" type="checkbox" value="${each}" id="${each}">
                <label class="form-check-label" for="flexCheckDefault">
                   
                </label>
            </div>
    `
   })
   array_tipos.push(`<input onkeyup="busquedaData()" type="text" placeholder="Search.." name="search"  id="SearchBar">`)
   container.innerHTML = array_tipos.join(``)

}
imprimirChecks(`#MainCards`, tipos)



