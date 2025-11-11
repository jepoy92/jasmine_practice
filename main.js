import { performOperation } from './spec/helpers/calculatorHelper.js';

function calculate(event) {
    const inputValue = event.target.value.trim();
    
    const match = inputValue.match(/^(\d+)\s*([\+\-\*\/])\s*(\d+)$/);
    if (!match) {
        updateResult("Operation not recognized");
        return;
    }

    const [, startStr, operator, endStr ] = match;
    const numberA = Number(startStr);
    const numberB = Number(endStr);

    try {
        const total = performOperation(numberA, operator, numberB);
        updateResult(total);
    } catch (error) {
        updateResult(error.message);
    }
}


function updateResult(result) {
    const element = document.getElementById("result");
    if (element) element.innerText = result;
}
  
document.getElementById("inputValue").addEventListener('change', calculate);