let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let average = 0;
let sum = 0;

for (let indexAvarage = 0; indexAvarage < numbers.length; indexAvarage += 1) {
    sum += numbers[indexAvarage]
}

average = sum / numbers.length

console.log(average)