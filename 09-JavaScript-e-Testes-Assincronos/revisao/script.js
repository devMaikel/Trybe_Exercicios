const getCurrencies = () => {
  const searchButton = document.querySelector('#search-button');
  searchButton.addEventListener('click', () => {
    const moedaInput = document.querySelector('#search-input');
    const input = moedaInput.value.toUpperCase();
    render(input);
  })
}

const render = async (moeda) => {
  clearList();
  const {rates, base} = await fetchCurrencies(moeda);
  const ul = document.querySelector('#list');
  ul.innerText = `Valores referentes a 1 ${base}:`
  const ratesEntries = Object.entries(rates);
  ratesEntries.forEach((e) => {
    const li = document.createElement('li');
    li.innerText = `${e[0]}: ${e[1].toFixed(2)}`;
    li.classList.add('moeda');
    ul.appendChild(li);
  });
}

const clearList = () => {
  const ul = document.querySelector('#list')
  ul.innerHTML = '';
}

const start = async () => {
  getCurrencies();
}

window.onload = start;