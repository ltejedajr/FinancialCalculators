"use strict";

window.onload = init;

function init() {
    const buttonCalculate = document.getElementById("buttonCalculate");
    buttonCalculate.onclick = buttonCalculateClick;
}

function buttonCalculateClick() {
    // Get the starting values.
    const inputPrincipal = document.getElementById("inputPrincipal");
    const inputTermLength = document.getElementById("inputTermLength");
    const inputInterest = document.getElementById("inputInterest");
    const outputFutureValue = document.getElementById("outputFutureValue");

    let principal = Number(inputPrincipal.value);
    let termLength = Number(inputTermLength.value);
    let annualInterest = Number(inputInterest.value) / 100; // Convert to decimal.
    
    // Calculate the future value of the annuity.
    let n = 12; // Assume monthly contributions
    let r = annualInterest / n;
    let t = termLength * n;

    let futureValue = principal * ((Math.pow(1 + r, t) - 1) / r);
    
    // Display the output.
    outputFutureValue.value = futureValue.toFixed(2);
}

// Formula for the future value of an annuity:
// A = P * [(1 + r/n)^(nt) - 1] / (r/n)
// A is the future value of the annuity.
// P is the periodic payment.
// r is the annual interest rate, expressed as a decimal.
// n is the number of compounding periods per year (12 for monthly contributions).
// t is the number of years.
