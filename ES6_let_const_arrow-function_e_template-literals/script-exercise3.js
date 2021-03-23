const button = document.querySelector('#eventClick');
let clickCount = 0;
button.addEventListener('click', () => clickCount += 1);

const tela = document.querySelector('.visivel');
 tela.appendChild(clickCount.value);
