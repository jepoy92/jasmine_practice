import { performOperation } from "./helpers/calculatorHelper.js"

describe("Validate inputs for performOperation", () => {
    it("should throw error if startingValue is not a number", () => {
        expect(() => performOperation("a", "+", 5)).toThrowError("Invalid number input");
    });
    it("should throw error if number is not a number", () => {
        expect(() => performOperation(5, "+", "b")).toThrowError("Invalid number input");
    });

    it("should throw an error if operator is number and not a string", () => {
        expect(() => performOperation(10, 123, 5))
            .toThrowError("Operation not accepted");
    });

    it("should throw an error if operator is not accepted", () => {
        expect(() => performOperation(10, "divide", 5))
            .toThrowError("Operation not accepted");
    });
});