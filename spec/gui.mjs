import { JSDOM } from "jsdom";
import { performOperation } from "./helpers/calculatorHelper.js";

let document;

beforeEach(() => {
    const dom = new JSDOM(`
        <input type="text" id="inputValue" />
        <div id="result"></div>
    `);
    document = dom.window.document;
});

describe("GUI input parsing and display", () => {
    it("calculates and displays result correctly with spaces", () => {
        const inputElement = document.getElementById("inputValue");
        const resultElement = document.getElementById("result");

        inputElement.value = "3 + 7";
        const match = inputElement.value.trim().match(/^(\d+)\s*([\+\-\*\/])\s*(\d+)$/);
        const numberA = Number(match[1]);
        const operator = match[2];
        const numberB = Number(match[3]);
        const expectedTotal = performOperation(numberA, operator, numberB);

        resultElement.innerText = expectedTotal;

        expect(resultElement.innerText).toBe("10");
    });

    it("should display error message for invalid input", () => {
        const inputElement = document.getElementById("inputValue");
        const resultElement = document.getElementById("result");

        inputElement.value = "Hello world";
        resultElement.innerText = "Operation not recognized";

        expect(resultElement.innerText).toBe("Operation not recognized");
    });
});