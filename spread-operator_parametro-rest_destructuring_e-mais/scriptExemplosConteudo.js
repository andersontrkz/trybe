// Faça uma lista com as suas frutas favoritas
const specialFruit = ['Banana', 'Morango', 'Maracuja'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['Suco', 'Uva', 'Leite Condensado'];

const fruitSalad = (fruit, additional) => {
  const saladaDeFruta = [...specialFruit, ...additionalItens];
  return saladaDeFruta;
};

console.log(fruitSalad(specialFruit, additionalItens));