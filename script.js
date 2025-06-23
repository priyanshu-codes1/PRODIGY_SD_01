function convertTemperature() {
  const temp = parseFloat(document.getElementById("tempInput").value);
  const unit = document.getElementById("unitInput").value;

  const toCelsius = document.getElementById("toCelsius");
  const toFahrenheit = document.getElementById("toFahrenheit");
  const toKelvin = document.getElementById("toKelvin");

  if (isNaN(temp)) {
    toCelsius.innerText = "❌ Please enter a valid number.";
    toFahrenheit.innerText = "";
    toKelvin.innerText = "";
    return;
  }

  let celsius, fahrenheit, kelvin;

  switch (unit) {
    case "celsius":
      celsius = temp;
      fahrenheit = (temp * 9 / 5) + 32;
      kelvin = temp + 273.15;
      break;
    case "fahrenheit":
      celsius = (temp - 32) * 5 / 9;
      fahrenheit = temp;
      kelvin = celsius + 273.15;
      break;
    case "kelvin":
      celsius = temp - 273.15;
      fahrenheit = (celsius * 9 / 5) + 32;
      kelvin = temp;
      break;
  }

  toCelsius.innerText = `🌡️ Celsius: ${celsius.toFixed(2)} °C`;
  toFahrenheit.innerText = `🔥 Fahrenheit: ${fahrenheit.toFixed(2)} °F`;
  toKelvin.innerText = `❄️ Kelvin: ${kelvin.toFixed(2)} K`;
}
