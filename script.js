//converter upgrades, adding temperature and pressure

function convert() {
    //parseFloat converts the text like "100" to a number
    const inputValue = parseFloat(document.getElementById("userInput").value);
    const unit = document.getElementById("unit").value;
  
    let result = 0;
    let resultString = "";
  
    if (isNaN(inputValue)) {
    resultString = "Please enter a number.";
    } else if (unit === "milesToKm") {
      result = inputValue * 1.60934;
      resultString = inputValue + " miles = " + result.toFixed(2) + " km"; //.toFixed(2) cuts the result to 2 decimal places 
    } else if (unit === "kmToMiles") {
      result = inputValue / 1.60934;
      resultString = inputValue + " km = " + result.toFixed(2) + " miles";
    } else if (unit === "fahrenheitToCelsius") {
      result = (inputValue - 32) / 1.8;
      resultString = inputValue + "°F = " + result.toFixed(2) + "°C";
    } else if (unit === "celsiusToFahrenheit") {
      result = inputValue * 1.8 + 32;
      resultString = inputValue + "°C = " + result.toFixed(2) + "°F";
    } else if (unit === "kpaToInHg") {
      result = inputValue * 0.2953;
      resultString = inputValue + " kPa = " + result.toFixed(2) + " inHg";
    }
    else if (unit === "inHgToKpa") {
      result = inputValue * 3.38639;
      resultString = inputValue + " inHg = " + result.toFixed(2) + " kPa";
    } else {
      // This helps you catch typos/mismatches
      resultString = "Unsupported option: \"" + unit + "\"";
    }
  
    
    console.log(resultString);
    document.getElementById("resultElement").innerHTML = resultString;
      // Debugging info in the console:
    console.log("unit:", unit, "| input:", inputRaw, "| result:", resultString);
  }
  