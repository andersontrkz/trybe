// const testingScope = (escopo) => {
//   if (escopo === true) {
//     let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
//     ifScope = ifScope + ' ótimo, fui utilizada no escopo !';
//     console.log(ifScope);
//   } else {
//     let elseScope = 'Não devo ser utilizada fora meu escopo (else)';
//     console.log(elseScope);
//   }
//   // console.log(`${ifScope} o que estou fazendo aqui ? :O`); 
// }

// testingScope(false);

// const oddsAndEvens = [13, 3, 4, 10, 7, 2];

// // Seu código aqui.

// // console.log(`${oddsAndEvens[5]}, ${oddsAndEvens[1]}, ${oddsAndEvens[2]}, ${oddsAndEvens[4]}, ${oddsAndEvens[3]}, ${oddsAndEvens[0]}`);

// console.log(oddsAndEvens.sort((a, b) => a-b));

//Crie uma função que receba um número e retorne seu fatorial.
// const factorial = (n) => !(n > 1) ? 1 : factorial(n - 1) * n;

// console.log(factorial(4));

//Crie uma função que receba uma frase e retorne qual a maior palavra.

// const longestWord = (array) => {
//   let frase = array.split(' ');
//   let resultado ='';
//     for (let index = 0; index < frase.length; index += 1) {
//       const palavra = frase[index];
//       if (palavra.length > resultado.length) {
//         resultado = palavra
//       } 
//     }
//   return resultado;
// }

// console.log(longestWord("Antônio foi no banheiro e não sabemos o que aconteceu")); // retorna 'aconteceu')