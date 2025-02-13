const convertToCelsius = function(tempF) {
  const tempC = (tempF - 32) * 5 / 9;
  const roundedTempC = Math.round(tempC * 10) / 10;
  return roundedTempC;
};

const convertToFahrenheit = function(tempC) {
  const tempF = tempC * 9 / 5 + 32;
  const roundedTempF = Math.round(tempF * 10) / 10;
  return roundedTempF;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
