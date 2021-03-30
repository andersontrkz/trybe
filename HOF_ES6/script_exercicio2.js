// Desenvolva uma HOF que retorna o resultado de um sorteio. Esta HOF irá gerar um número aleatório entre 1 e 5 recebendo como parâmetros o número apostado e uma função que checa se o número apostado é igual ao número sorteado. O retorno da sua HOF deve ser uma string (Ex: "Tente novamente" ou "Parabéns você ganhou").



const numberCheck = (aposta, number) => aposta === number;

const lotariaResultado = (aposta, callback) => {
  const number = Math.ceil((Math.random() * 5));

  return callback(aposta, number) ? 'Parabens você venceu!' : 'Tente novamente!';
};

console.log(lotariaResultado(2, numberCheck));