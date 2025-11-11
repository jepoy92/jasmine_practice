const { performOperation } = require("./helpers/calculatorHelper.js");

describe("Calculator", () => {
    describe("Test different additions", () => {
        it("The total should be 5.", () => {
            const result = performOperation(0, "add", 5);
            expect(result).toBe(5);   
        });
        it("The total should be 10.", () => {
            const result = performOperation(5, "add", 5);
            expect(result).toBe(10);   
        });
    });

    it("should subtract number to the total.", () => {
        const result = performOperation(30, "subtract", 5);
        expect(result).toBe(25);
    })

    it("should multiply number with the total.", () => {
        const result = performOperation(10, "multiply", 2);
        expect(result).toBe(20);        
    })

    it("should divide number with the total.", () => {
        const result = performOperation(10, "divide", 2);
        expect(result).toBe(5);        
    })

    it("should throw error when dividing by 0", () => {
        expect(() => performOperation(10, "divide", 0)).toThrowError("Cannot divide by zero");
    })
})