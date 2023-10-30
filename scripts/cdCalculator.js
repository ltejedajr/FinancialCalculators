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
    const outputInterestEarned = document.getElementById("outputInterestEarned")
    const outputTotalAmount = document.getElementById("outputTotalAmount");

    let principal = Number(inputPrincipal.value);
    let termLength = Number(inputTermLength.value);
    let annualInterest = Number(inputInterest.value) / 100; // Convert to decimal.
    // let annualInterestPercentage = annualInterest / 100; // Convert to decimal.
    
    // Calculate the unknown values.
    let totalAmount = principal * Math.pow(1 + annualInterest / 365, 365 * termLength);
    let interestEarned = totalAmount - principal;

    // Display the output.
    outputInterestEarned.value = interestEarned.toFixed(2);
    outputTotalAmount.value = totalAmount.toFixed(2);
}

// Formula
// A = P(1 + r/n)^(nt)
// A is the total that your CD will be worth at the end of the term, including the amount you put in.
// P is the principal, or the amount you deposited when you bought the CD.
// r is the rate, or annual interest rate, expressed as a decimal. If the interest rate is 1.25% APY, r is 0.0125.
// n is the number of times that interest in compounded every year. Most CDs pay interest that is compounded daily, so n = 365.
// t is time, or the number of years until the maturity date.
