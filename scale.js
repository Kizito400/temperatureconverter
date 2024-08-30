function convertTemperature() {
    let temp = parseFloat(document.getElementById("tempInput").value);
    let unit = document.getElementById("tempUnit").value;
    
    
    
    
    
    if (unit === "celsius") {
        celsius = temp;
        fahrenheit = (temp * 9/5) + 32;
        kelvin = temp + 273;
    } else if (unit === "fahrenheit") {
        celsius = (temp - 32) * 5/9;
        fahrenheit = temp;
        kelvin = 273;
    } else if (unit === "kelvin") {
        celsius = temp - 273;
        fahrenheit = (temp - 273) * 9/5 + 32;
        kelvin = temp;
    }


          document.getElementById("resultCelsius").innerText = "Celsius: " + celsius.toFixed(2) + "°C";
            document.getElementById("resultFahrenheit").innerText = "Fahrenheit: " + fahrenheit.toFixed(2) + "°F";
            document.getElementById("resultKelvin").innerText = "Kelvin: " + kelvin.toFixed(2) + "K";
        }
