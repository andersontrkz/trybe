
//         Aqui você vai modificar os elementos já existentes utilizando apenas as funções:
//         - document.getElementById()
//         - document.getElementsByClassName()
//         - document.getElementsByTagName()

// 1- Crie uma função que mude o texto na tag <p> para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício)
function changeText(elementTag, newText) {
  let text = document.getElementsByTagName(elementTag)[0].innerText = newText;
  return text;
} 

changeText('p', 'Em dois anos me vejo trabalhando como dev');

// 2- Crie uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).
function trybeColor(nameClass) {
  document.getElementsByClassName(nameClass)[0].style.backgroundColor = 'rgb(76,164,109)';
}
trybeColor('main-content');

// 3- Crie uma função que mude a cor do quadrado vermelho para branco.
function changeColor(classElement) {
  document.getElementsByClassName(classElement)[0].style.backgroundColor = 'White';
}
changeColor('center-content');


// 4- Crie uma função que corrija o texto da tag <h1>.
function textCorrection(listElement, correction) {
document.getElementsByTagName(listElement)[0].innerText = correction;
}
textCorrection('h1', "Exercício 5.1 - JavaScript");

//  5 -Crie uma função que modifique todo o texto da tag <p> para maiúsculo.

function paragraphUpperCase(listP,) {
  let paragraph = document.getElementsByTagName(listP)[0];
  paragraph.innerHTML = paragraph.innerHTML.toUpperCase();
}
paragraphUpperCase('p');

// 5- Crie uma função que exiba o conteúdo de todas as tags <p> no console.
 
function showParagraphs() {
  let paragraphs = document.getElementsByTagName('p');
  for (let index = 0; index < paragraphs.length; index += 1) {
    console.log(paragraphs[index].innerHTML);
  }
}
showParagraphs();