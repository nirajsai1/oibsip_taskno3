function convertToCelsius() {
    var celsiusInput = document.getElementById("celsius");
    var celsius = parseFloat(celsiusInput.value);
    
    if (!isNaN(celsius)) {
      var fahrenheit = (celsius * 9/5) + 32;
      document.getElementById("fahrenheit").value = fahrenheit.toFixed(2);
      document.getElementById("result").textContent = celsius + "°C is equal to " + fahrenheit.toFixed(2) + "°F";
    }
  }
  
  function convertToFahrenheit() {
    var fahrenheitInput = document.getElementById("fahrenheit");
    var fahrenheit = parseFloat(fahrenheitInput.value);
    
    if (!isNaN(fahrenheit)) {
      var celsius = (fahrenheit - 32) * 5/9;
      document.getElementById("celsius").value = celsius.toFixed(2);
      document.getElementById("result").textContent = fahrenheit + "°F is equal to " + celsius.toFixed(2) + "°C";
    }
  }
  