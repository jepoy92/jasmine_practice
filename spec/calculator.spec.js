const Calculator = require("../calculator");

describe("Calculator", () => {
    it("should add number to the total.", () => {
        const calculator = new Calculator();
        calculator.add(5);
        expect(calculator.total).toBe(5);   
    })

    it("should subtract number to the total.", () => {
        const calculator = new Calculator();
        calculator.total = 30;
        calculator.subtract(5);
        expect(calculator.total).toBe(25);
    })

    it("should multiply number with the total.", () => {
        const calculator = new Calculator();
        calculator.total = 10;
        calculator.multiply(2);
        expect(calculator.total).toBe(20);        
    })

    it("should divide number with the total.", () => {
        const calculator = new Calculator();
        calculator.total = 10;
        calculator.divide(2);
        expect(calculator.total).toBe(5);        
    })

    it("should initialize the total", () => {
        const calculator = new Calculator();
        expect(calculator.total).toBe('0');
    })
})