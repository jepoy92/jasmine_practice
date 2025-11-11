// calculatorHelper.js
import { Calculator } from '../../calculator.js'; // adjust the path relative to this file

export function performOperation(startingValue, operation, number) {
    if(typeof startingValue !== "number" || typeof number !== "number") {
        throw new Error("Invalid number input");
    }
    if(typeof operation !== "string" || !["+", "-", "*", "/"].includes(operation)) {
        throw new Error("Operation not accepted");
    }

    const calculator = new Calculator();
    calculator.total = startingValue;

    switch(operation) {
        case "add":
        case "+" : calculator.add(number); break;
        case "subtract":
        case "-" : calculator.subtract(number); break;
        case "multiply":
        case "*" : calculator.multiply(number); break;
        case "divide":
        case "/" :
            if(number === 0) throw new Error("Cannot divide by zero");
            calculator.divide(number);
            break;
        default:
            throw new Error("Invalid operation");
    }

    return calculator.total;
}