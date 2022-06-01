const messageDelay = () => Math.floor(Math.random() * 4500);

const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
};

const toFahrenheit = (degreeCelsius) => (degreeCelsius * 9/5) + 32;

const temperatureInFahrenheit = (temperature) =>
  console.log(`It is currently ${toFahrenheit(temperature)}ºF at Mars`);

const greet = (temperature) =>
  console.log(`Hi there! Curiosity here. Right now is ${temperature}ºC at Mars`);

const handleError = (errorReason) =>
  console.log(`Error getting temperature: ${errorReason}`);

// crie a função sendMarsTemperature abaixo
const sendMarsTemperature = (callback) => {
  delay = messageDelay();
  if (delay > 2500) return console.log(handleError('Delay muito alto!'));
  callback(getMarsTemperature());
}

setTimeout(() => sendMarsTemperature(temperatureInFahrenheit), messageDelay());
setTimeout(() => sendMarsTemperature(greet), messageDelay());