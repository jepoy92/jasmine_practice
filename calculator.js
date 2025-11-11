export class Calculator {
    constructor() {
        this.total = 0;
    }

    add(number) {
        this.total += number;
        return this.total;
    }

    subtract(number) {
        this.total -= number;
        return this.total;
    }

    multiply(number) {
        this.total *= number;
        return this.total;
    }

    divide(number) {
        if (number === 0) throw new Error("Cannot divide by zero");
        this.total /= number;
        return this.total;
    }
}