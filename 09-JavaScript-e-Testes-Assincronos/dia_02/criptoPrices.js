// API criptocoins
// const fetch = require('node-fetch');

const fetchCoinsAPI = async () => {
  const coins = await fetch('https://api.coincap.io/v2/assets')
    .then((response) => response.json())
    .then((data) => data.data)
    .catch((error) => error.toString());
    
  await appendList(coins);
}

const appendList = async (coin) => {
  const coinList = document.getElementById('coinList');

  const coinListFiltred = coin.filter((e) => {
    const pricee = Number(e.priceUsd);
    return pricee > 300;
  });
  console.log(coinListFiltred);

  coinListFiltred.forEach((coin) => {
    const coinLi = document.createElement('li');
    const price = Number(coin.priceUsd);
    
    coinLi.innerText = `${coin.name} (${coin.symbol}): ${price.toFixed(4)} - Supply: ${coin.supply}`;
    coinList.appendChild(coinLi);
  });
}

window.onload = () => fetchCoinsAPI();;
