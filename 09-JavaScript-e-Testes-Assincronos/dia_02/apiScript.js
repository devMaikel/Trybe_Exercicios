// apiScript.js
const API_URL = 'https://icanhazdadjoke.com/';
const joke = document.getElementById('joke');

const fetchJoke = () => {
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };

  fetch(API_URL, myObject)
    .then(response => response.json())
    .then(data => showJoke(data.joke));
};

const showJoke = (param) => joke.innerText = param;

window.onload = () => fetchJoke();