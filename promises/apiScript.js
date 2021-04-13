// apiScript.js
const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = () => {
  // Adicionar lógica aqui!
  const myObject = {
    method: 'GET',
    Headers:{ 'Accept': 'application/json'}
  }

  fetch(API_URL, myObject)
    .then(response => console.log(response))
};

window.onload = () => fetchJoke();