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
        // inputLoanLength

        const inputPrincipal = document.getElementById("inputPrincipal");
        const inputInterest = document.getElementById("inputInterest");
        const inputLoanLength = document.getElementById("inputLoanLength");
        
        let principal = Number(inputPrincipal.value);
        let yearlyInterest = Number(inputInterest.value);
        let loanLengthInYears = Number(inputLoanLength.value);

    // Calculate the unknown values.

        let monthlyInterestAsFraction = yearlyInterest / 100 / 12 ;
  
        let loanLengthInMonths = loanLengthInYears * 12;



        let monthlyPayment = principal * 
                (
                    (monthlyInterestAsFraction)
                    /
                    (1 - (1 + monthlyInterestAsFraction) ** -loanLengthInMonths)
                );

        monthlyPayment = monthlyPayment.toFixed(2);

        let totalAmount = (monthlyPayment * loanLengthInMonths) - principal;




    // Display the output.

        // outputMonthlyPayment
        // outputTotalAmount

        const outputMonthlyPayment = document.getElementById("outputMonthlyPayment");
        const outputTotalAmount = document.getElementById("outputTotalAmount");   

        outputMonthlyPayment.value = monthlyPayment;
        outputTotalAmount.value = totalAmount;


}