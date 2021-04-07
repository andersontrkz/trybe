//SPREAD OPERATOR=============================================================================
// Faça uma lista com as suas frutas favoritas
const specialFruit = ['Banana', 'Morango', 'Maracuja'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['Suco', 'Uva', 'Leite Condensado'];

const fruitSalad = (fruit, additional) => {
  const saladaDeFruta = [...specialFruit, ...additionalItens];
  return saladaDeFruta;
};

console.log(fruitSalad(specialFruit, additionalItens));


// PARAMETRO REST=============================================================================
const sum = (...args) => args.reduce((accumulator, current) => accumulator + current, 0);
console.log(sum(4, 7, 8, 9, 60, 1)); // 88

const person = {
  name: 'João',
  lastName: 'Jr',
  age: 34,
};

const { lastName } = person;
console.log(lastName);

//====================================================================================================
const getNationality = ({ firstName, nationality = 'brazil' }) => `${firstName} is ${nationality}`;

const person = {
    firstName: 'João',
    lastName: 'Jr II',
};



const otherPerson = {
    firstName: 'Ivan',
    lastName: 'Ivanovich',
    nationality: 'Russian',
};

console.log(getNationality(otherPerson)); // Ivan is Russian
console.log(getNationality(person));



// Object property shorthand=============================================================================
const getPosition = (latitude, longitude) => ({
  latitude,
  longitude});

console.log(getPosition(-19.8157, -43.9542));


//default parameters =============================================================================

const greeting = (user = 'usuário') => console.log(`Welcome ${user}!`);

greeting(); // // Welcome usuário!