const ENDPOINT = 'https://api.exchangerate.host/latest?base='

const fetchCurrencies = async (moeda) => {
  const response = await fetch(`${ENDPOINT}${moeda}`);
  const { base, rates } = await response.json();
  return { base, rates };
}

fetchCurrencies('BRL');