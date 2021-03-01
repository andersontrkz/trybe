// let name = 'Marta';
// let lastName = 'Silva';
// let age = 34;
// let medals = { golden: 2, silver: 3 };

// acesando Objetos -----------------------------------------------
// let player = {
//     name: 'Marta',
//     lastName: 'Silva',
//     age: 34,
//     medals: {
//         golden: 2,
//         silver: 3,
//     },
//     bestInTheWorld: [2006, 2007, 2008, 2009, 2010, 2018],
// };

// console.log(`A Jogadora ${player.name} ${player.lastName} foi eleita a melhor do mundo ${player.bestInTheWorld.length} vezes.`)

// console.log(`A Jogadora ${player.name} possui ${player.medals.golden} medalhas de ouro e ${player.medals.silver} de prata.`)

//FOR IN ARRAY---------------------------------------------

let cars = ["Saab", "Volvo", "BMW"];

for (let i in cars) {
  console.log(cars[i]);
}

// OU FOR IN OBJETO 
let car = {
    type: "Fiat",
    model: "500",
    color: "white",
  };
  
  for (let i in car) {
    console.log(i, car[i]);
  }

  // Adição
let a = 5;
let b = 2;

a + b;

function sum(a, b) {
    return a + b;
  }