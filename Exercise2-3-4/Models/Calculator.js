class Calculator {
    constructor() {
        this.id = Date.now();
    }

    #log = (value) => {
        console.log(value);
    };

    add = (num1, num2) => {
        const value = num1 + num2;
        this.#log(value);
        return value;
    };

    addByListArr = (arr) => {
        let sum = 0;
        arr.forEach((item) => {
            sum += item;
        });
        return sum;
    };

    subtract  = (num1, num2) => {
        const value = num1 - num2;
        this.#log(value);
        return value;
    }

    subtractByListArr = (arr) => {
        let total = arr[0];
        for(let i = 1; i<arr.length; i++){
            total -= arr[i];
        }
        return total;
    }

    multiply  = (num1, num2) => {
        const value = num1 * num2;
        this.#log(value);
        return value;
    }

    multiplyByListArr = (arr) => {
        let total = 1;
        arr.forEach((item) => {
            total *= item;
        });
        return total;
    };

    divide  = (num1, num2) => {
        const value = num1 / num2;
        this.#log(value);
        return value;
    }

    divideByListArr = (arr) => {
        const total = arr.reduce((a, b) => a / b);
        return total;
    };
}

module.exports = Calculator;