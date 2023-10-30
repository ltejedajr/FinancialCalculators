"use strict";

function convertToFahrenheit() {
    const celsius = parseFloat(document.getElementById("celsiusInput").value);
    if (!isNaN(celsius)) {
        const fahrenheit = (celsius * 9/5) + 32;
        document.getElementById("result").textContent = `Fahrenheit: ${fahrenheit.toFixed(2)}`;
    } else {
        document.getElementById("result").textContent = "Please enter a valid number for Celsius.";
    }
}

function convertToCelsius() {
    const fahrenheit = parseFloat(document.getElementById("fahrenheitInput").value);
    if (!isNaN(fahrenheit)) {
        const celsius = (fahrenheit - 32) * 5/9;
        document.getElementById("result").textContent = `Celsius: ${celsius.toFixed(2)}`;
    } else {
        document.getElementById("result").textContent = "Please enter a valid number for Fahrenheit.";
    }
}