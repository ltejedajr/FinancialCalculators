"use strict";

window.onload = init;

function init(){
    const buttonCalculate = document.getElementById("buttonCalculate");
    buttonCalculate.onclick = buttonCalculateClick;
}


function buttonCalculateClick(){
    // Get the starting values.

        // inputPrincipal
        // inputInterest
        // inputTerms

        const inputPrincipal = document.getElementById("inputPrincipal");
        const inputInterest = document.getElementById("inputInterest");
        const inputTerm = document.getElementById("inputTerm");
        const inputCompounding = document.getElementById("inputCompounding");
        
        let principal = Number(inputPrincipal.value);
        let annualInterest = Number(inputInterest.value);
        let term = Number(inputTerm.value);
        let compounding = Number(inputCompounding.value);

    // Calculate the unknown values.

        let termAsFraction = term / 12;
        let totalAmount = principal * 
                (1 + annualInterest
                    /
                    compounding) 
                    Math.pow(compounding * termAsFraction);


    // Display the output.

        // outputTotalAmount

        const outputTotalAmount = document.getElementById("outputTotalAmount");   

        outputTotalAmount.value = totalAmount.toFixed(2);


}