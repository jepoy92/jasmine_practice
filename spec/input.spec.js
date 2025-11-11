const { performOperation } = require("./helpers/calculatorHelper.js");

describe("Validate inputs for performOperation", () => {
    it("should throw error if startingValue is not a number", () => {
        expect(() => performOperation("a", "+", 5)).toThrowError("Invalid number input");
    });
    it("should throw error if number is not a number", () => {
        expect(() => performOperation(5, "+", "b")).toThrowError("Invalid number input");
    });

    it("should throw an error if operation is not a string", () => {
        expect(() => performOperation(10, 123, 5))
            .toThrowError("Operation must be a string");
    });

    it("should throw an error if operation is not valid", () => {
        expect(() => performOperation(10, "modulus", 5))
            .toThrowError("Operation not recognized");
    });
});