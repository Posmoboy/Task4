// function busquedaData() {
//     let texto = document.getElementById(`SearchBar`).value
//     let checks = Array.from(document.querySelectorAll(`.class_form-input:checked`)).map(each => each.value)
   
//     let filtro = ArrayIndex.filter(each => {
//         return (each.nombre.includes(texto)) && (checks.length === 0 || checks.includes(each.tipo))
//     })
//     console.log(filtro)
//     if (filtro.length > 0) {
//         printTemplates(`#MainCards`, filtro)
//     } else {
//         let container = document.querySelector(`#MainCards`)
//         container.innerHTML = `
//         <div class="card m-2 card-box">
//             <div class="card-body d-flex flex-colum align-items-center ">
//                  <h3 class="card-title">Event Not Found</h3>
//             </div>
//         </div>
//         `
//     }
// }