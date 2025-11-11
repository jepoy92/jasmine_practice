const Calculator = require("../../calculator.js");

function performOperation(startingValue, operation, number) {
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