// exercicio 4

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let average = 0;
let sum = 0;

//exercicio 4

//somando em sum os numeros do array
for (let indexAvarage = 0; indexAvarage < numbers.length; indexAvarage += 1) {
    sum += numbers[indexAvarage]
}
average = sum / numbers.length

if (average > 20) {
    console.log('valor maior que 20')
} else {
    console.log('valor menor que 20')
}

// exercicio 5 

let value = 0;

for (let indexValue = 0; indexValue < numbers.length; indexValue += 1) {    
    if(value < numbers[indexValue]){
        value = numbers[indexValue];
    }
}
console.log(`o maior valor do array é ${value}`);

//exercicio 6


let evenValues = 0;
let value = 0;
let error;

for (let indexValues = 0; indexValues < numbers.length; indexValues += 1) {    
    if(numbers[indexValues] % 2 !== 0 ){
       evenValues += 1;
    } 
}

if (evenValues === 0){
    console.log('nenhum valor impar encontrado');
} else {
    console.log(evenValues);
}


// exercicio 7

let smallestNumber = 1000;

for (let indexValue = 0; indexValue < numbers.length; indexValue += 1) {    
    if (numbers[indexValue] < smallestNumber) {
        smallestNumber = numbers[indexValue];
    };
}
console.log(smallestNumber);


// exercicio 8 

let numbers = [];

for (let indexArray = 1 ; indexArray < 25; indexArray += 1) {
    numbers.push(indexArray);
}
console.log(numbers);

// //exercicio 9

for (let indexDiv = 0; indexDiv < numbers.length; indexDiv += 1) {
   numbers[indexDiv] = numbers[indexDiv] /2;
}
console.log(numbers);


// exercicios Bônus 1

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let i = 1; i < numbers.length; i++) {
  for (let j = 0; j < i; j++) {
    if (numbers[i] < numbers[j]) {
      let position = numbers[i];

      numbers[i] = numbers[j];
      numbers[j] = position;
    }
  }
}

console.log(numbers);

// exercicios Bônus 2

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let i = 1; i < numbers.length; i++) {
  for (let j = 0; j < i; j++) {
    if (numbers[i] > numbers[j]) {
      let position = numbers[i];

      numbers[i] = numbers[j];
      numbers[j] = position;
    }
  }
}

console.log(numbers);
