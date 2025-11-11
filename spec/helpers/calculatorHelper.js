const Calculator = require("../../calculator.js");

/**
 * Performs a calculator operation.
 * Validates that inputs are correct before running.
 * @param {number} startingValue
 * @param {string} operation
 * @param {number} number
 * @returns {number}
 */

function performOperation(startingValue, operation, number) {
    // Validation numbers
    if(typeof startingValue !== "number" || typeof number !== "number") {
        throw new Error("Invalid number input");
    }

    // Validation operation
    if(typeof operation !== "string" || !["+", "-", "*", "/"].includes(operation)) {
        throw new Error("Operation must be a string");
    }

    // Create calculator and perform operation
    const calculator = new Calculator();
    calculator.total = startingValue;

    switch(operation) {
        case "add":
            calculator.add(number);
            break;
        case "subtract":
            calculator.subtract(number);
            break;
        case "multiply":
            calculator.multiply(number);
            break;
        case "divide":
            if (number === 0) throw new Error("Cannot divide by zero");
            calculator.divide(number);
            break;
        default:
            throw new Error("Invalid operation");
    }

    return calculator.total;
}

module.exports = { performOperation };