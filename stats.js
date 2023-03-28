let CurrentDate = data.currentDate
let ArrayIndex = data.events;
let SumaAsist = [];
let SumaCapaci = [];
let PorcentajeAsit = [];

let ArrayFilterAfter = [];
let ArrayFilterBefore = [];

console.log(SumaAsist)


function EventsFilterDateBefore(ArrayIndex) {
  for (let i = 0; i < ArrayIndex.length; i++) {
    if (ArrayIndex[i].date < CurrentDate) {
      ArrayFilterBefore.push(ArrayIndex[i])
    }
  }
}

EventsFilterDateBefore(ArrayIndex);
console.log(ArrayFilterBefore);

function EventsFilterDateAfter(ArrayIndex) {
  for (let i = 0; i < ArrayIndex.length; i++) {
    if (ArrayIndex[i].date > CurrentDate) {
      ArrayFilterAfter.push(ArrayIndex[i])
    }
  }
}

EventsFilterDateAfter(ArrayIndex);
console.log(ArrayFilterAfter);



//********************funciones stats****************//


const filterAsistenciaTotal = ArrayIndex.map(({ name, category, assistance, capacity }) => ({ name, category, assistance, capacity }));

console.log(filterAsistenciaTotal);


const filterAsistenciaUpcoming = ArrayFilterAfter.map(({ name, category, assistance, capacity }) => ({ name, category, assistance, capacity }));

console.log(filterAsistenciaUpcoming);


const filterAsistenciaPast = ArrayFilterBefore.map(({ name, category, assistance, capacity }) => ({ name, category, assistance, capacity }));

console.log(filterAsistenciaPast);



function Asistencia(ArrayIndex) {
  let SumaAsist = 0;
  ArrayIndex.forEach(element => SumaAsist += element.assistance)
  return SumaAsist;
};

var AsitenciaEventos = Asistencia(ArrayIndex);
console.log(Asistencia(ArrayIndex));


const filterCapacidad = ArrayIndex.map(({ name, category, capacity }) => ({ name, category, capacity }));

console.log(filterCapacidad);

function Capacity(ArrayIndex) {
  let SumaCapaci = 0;
  ArrayIndex.forEach(element => SumaCapaci += element.capacity)
  return SumaCapaci;
}

var CapacidadEventos = Capacity(ArrayIndex);
console.log(CapacidadEventos);





function promedioEventos(array) {
  return Math.round(((array[0].assistance / array[0].capacity) * 100));
}

var promedioEventosAsist = promedioEventos(filterAsistenciaPast);
console.log(promedioEventosAsist);


const promedioEventosrecorreArray = (arr) => {
  let promedios = [];
  for (let i = 0; i <= arr.length - 1; i++) {
    let promedio = Math.round(((arr[i].assistance / arr[i].capacity) * 100));
    promedios.push(promedio);
  }
  return promedios;
}

// let porcentArray = ArrayFilterBefore.map(function(element){
//   return  Math.round(((element.assistance / element.capacity) * 100));
// });

let porcentArrayTodo = ArrayIndex.map(function (element) {
  return {
    porcentaje: Math.round(((element.assistance / element.capacity) * 100)),
    category: element.category,
    name: element.name,
    revenues: Math.round(element.assistance * element.price),
  };
});


console.log(porcentArrayTodo);

let porcentArrayUpcoming = ArrayFilterAfter.map(function (element) {
  return {
    estimate: Math.round(((element.estimate / element.capacity) * 100)),
    category: element.category,
    name: element.name,
    revenues: Math.round(element.estimate * element.price),
  };
});


console.log(porcentArrayUpcoming);



let porcentArrayPast = ArrayFilterBefore.map(function (element) {
  return {
    porcentaje: Math.round(((element.assistance / element.capacity) * 100)),
    category: element.category,
    name: element.name,
    revenues: Math.round(element.assistance * element.price),
  };
});


console.log(porcentArrayPast);

// const filterPorcentaje = porcentArray.map(({ name, category,capacity }) => ({ name, category, capacity }));

// console.log(filterPorcentaje);




// function PorcentCap(filterAsistenciaTotal) {
//   let PorcentajeAsit = ((filterAsistenciaTotal.assistance / filterAsistenciaTotal.capacity) * 100)
//   return PorcentajeAsit
// }



// var PorcentajeAsistencia =  PorcentCap(filterAsistenciaTotal);
// console.log(promedioEventos);




//funcion Mayor porcentaje de asistencia 
//dividir el porcentaje de asistencia de todos los eventos por la cantidad de eventos
//sacar el porcentaje de todos los eventos pasados, ordenarlos de mayor a menor, impriman el primero

// Hacer Funcion**VER ↓↓↓↓↓ que pasa que no suma al array***
// function SortAscArrayPast(filterAsistenciaPast) {
//   let ListaAscArrayPast = [];
//   ListaAscArrayPast.push(filterAsistenciaPast.sort((a, b) => (a.capacity > b.capacity) ? 1 : -1))                         
//   return ListaAscArrayPast
// }


function SortAscArray(array) {
  let sortedArray = [...array];
  sortedArray.sort((a, b) => (a.capacity < b.capacity) ? 1 : -1);
  return sortedArray;
}

var CapturaSortAscArrayPast = SortAscArray(porcentArrayPast);
console.log(CapturaSortAscArrayPast);

var CapturaSortAscArrayUpcoming = SortAscArray(porcentArrayUpcoming);
console.log(CapturaSortAscArrayUpcoming);


var CapturaSortAscArrayTodo = SortAscArray(porcentArrayTodo)
console.log(CapturaSortAscArrayTodo)



//funcion Menor porcentaje de asitencia
//dividir el porcentaje de asistencia de todos los eventos por la cantidad de eventos
//sacar el porcentaje de todos los eventos pasados, ordenarlos de menor a mayor, impriman el primero

var SortDescArrayPast = filterAsistenciaPast.sort((a, b) => (a.capacity < b.capacity) ? 1 : -1);
console.log(SortDescArrayPast);

// var SortDescArray =  SortDesc(filterAsistenciaTotal);
// console.log(SortDescArray);

//funcion envento con mayor capacidad


function MayorCap(filterCapacidad) {
  return filterCapacidad.reduce((acumulador, valorActual) => {
    if (valorActual.capacity > acumulador.capacity) {
      return valorActual;
    } else {
      return acumulador;
    }
  });
}
MayorCap(filterCapacidad);

var MayorCapacidadEventos = MayorCap(filterCapacidad);
console.log(MayorCapacidadEventos);

function MayorAsist(filterAsistenciaTotal) {
  return filterAsistenciaTotal.reduce((acumulador, valorActual) => {
    if (valorActual.assistance > acumulador.assistance) {
      return valorActual;
    } else {
      return acumulador;
    }
  });
}
MayorAsist(filterAsistenciaTotal);

var MayorAsistenciaEventos = MayorAsist(filterAsistenciaTotal);
console.log(MayorAsistenciaEventos)



function MenorAsist(filterAsistenciaTotal) {
  return filterAsistenciaTotal.reduce((acumulador, valorActual) => {
    if (valorActual.assistance < acumulador.assistance) {
      return valorActual;
    } else {
      return acumulador;
    }
  });
}
MenorAsist(filterAsistenciaTotal);

var MenorAsistenciaEventos = MenorAsist(filterAsistenciaTotal);
console.log(MenorAsistenciaEventos)

//funion ganancias
//sumar todos los precios de los eventos (precio del evento multiplicado por asistencia) de una categoria

function Ganancias(ArrayIndex) {
  let Ganancias = 0;
  ArrayIndex.forEach(element => Ganancias += (element.price * element.capacity))
  return Math.round(Ganancias);
}

var GananciasEventos = Ganancias(ArrayIndex);
console.log(GananciasEventos);


//funcion agregar celdas

// function AddingCeldastbodyFirst(Array) {
//   var MayorCapacidadEventos =  MayorCap(filterCapacidad);
//   let table = ``;
//   const DinamicTbodyFirst = document.getElementById("tbodyFirst");
//   Array.forEach((Array) => {
//     table += `

//                         <th class="border"> <br>${Array[0]}</th>
//                         <th class="border"> <br> ${Array[Array.length - 1]}</th>
//                         <th class="border"> <br>${MayorCapacidadEventos}</th>
//                         `;
//   })
//   DinamicTbodyFirst.innerHTML = table
// };

// AddingCeldastbodyFirst(CapturaSortAscArrayTodo);


function AddingCeldasUpcomingbyCategory(Array) {
  let table = ``;
  const DinamicUpcomingbyCategory = document.getElementById("UpcomingbyCategory");
  Array.forEach((element) => {
    table += `
    
                        <th class="border"> <br>${element.category}</th>
                        <th class="border"> <br>${element.revenues}</th>
                        <th class="border"> <br>${element.estimate}</th>
                        `;
  })
  DinamicUpcomingbyCategory.innerHTML = table
};

AddingCeldasUpcomingbyCategory(CapturaSortAscArrayUpcoming);

function AddingCeldasPastbyCategory(Array) {
  let table = ``;
  const DinamicPastbyCategory = document.getElementById("PastbyCategory");
  Array.forEach((element) => {
    table += `
    
                        <th class="border"> <br>${element.category}</th>
                        <th class="border"> <br>${element.revenues}</th>
                        <th class="border"> <br>${element.porcentaje}</th>
                       `;
  })
  DinamicPastbyCategory.innerHTML = table
};

AddingCeldasPastbyCategory(CapturaSortAscArrayPast);













