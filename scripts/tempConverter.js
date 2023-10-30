"use strict";

window.onload = init;

function init() {
    const convertCToFBtn = document.getElementById("convertCToFBtn");
    convertCToFBtn.onclick = convertCToFBtnClicked;

    const convertFToCBtn = document.getElementById("convertFToCBtn");
    convertFToCBtn.onclick = convertFToCBtnClicked;
}

function convertCToFBtnClicked() {
    const celsius = Number(document.getElementById("celsiusInput").value);

    if (celsius) {
        const fahrenheit = (celsius * 9 / 5) + 32;
        return document.getElementById("farenheitResult").innerText = `Fahrenheit: ${fahrenheit} º`;
    } else {
        document.getElementById("farenheitResult").innerText = "Please enter a valid number for Celsius.";
    }
}

function convertFToCBtnClicked() {
    const fahrenheit = Number(document.getElementById("fahrenheitInput").value);

    if (fahrenheit) {
        const celsius = (fahrenheit - 32) * 5 / 9;
        return document.getElementById("celsiusResult").innerText = `Celsius: ${celsius.toFixed(1)} º`;
    }

    document.getElementById("celsiusResult").innerText = "Please enter a valid number for Fahrenheit.";
}





