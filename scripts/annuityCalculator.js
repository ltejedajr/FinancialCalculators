"use strict";

window.onload = init;

function init() {
    const buttonCalculate = document.getElementById("buttonCalculate");
    buttonCalculate.onclick = buttonCalculateClick;
}

function buttonCalculateClick() {
    // Get the input values from the user.
    const inputMonthlyPayout = document.getElementById("inputMonthlyPayout");
    const inputYearsToPayout = document.getElementById("inputYearsToPayout");
    const inputExpectedInterest = document.getElementById("inputExpectedInterest");
    const outputPresentValue = document.getElementById("outputPresentValue");

    let monthlyPayout = Number(inputMonthlyPayout.value);
    let yearsToPayout = Number(inputYearsToPayout.value);
    let expectedInterest = Number(inputExpectedInterest.value) / 100; // Convert to decimal.

    // Calculate the present value of the annuity.
    let n = 12; // Monthly contributions
    let r = expectedInterest / n;
    let t = yearsToPayout * n;

    // Calculate the present value using the annuity formula.
    let presentValue = monthlyPayout * ((1 - Math.pow(1 + r, -t)) / r);

    // Display the output.
    outputPresentValue.value = presentValue.toFixed(2);
}

// Formula for the future value of an annuity:
// A = P * [(1 + r/n)^(nt) - 1] / (r/n)
// A is the future value of the annuity.
// P is the periodic payment.
// r is the annual interest rate, expressed as a decimal.
// n is the number of compounding periods per year (12 for monthly contributions).
// t is the number of years.
