let n = 0;
// number.innerText = 0;

let buttonP = document.querySelector('#btnp');
let buttonM = document.querySelector('#btnm');

buttonP.addEventListener('click', () => {
  let number = document.querySelector('#number');
  n = n += 1;
  number.innerText = n;
})

buttonM.addEventListener('click', () => {
  let number = document.querySelector('#number');
  n = n -= 1;
  number.innerText = n;
})