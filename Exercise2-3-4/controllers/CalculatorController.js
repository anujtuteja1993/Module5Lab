"use strict";

const Calculator = require("../Models/Calculator");
const myCalculator = new Calculator();

exports.addOperationByTwoParams = (req, res) => {
    try {
        const number1 = parseInt(req.query.number1);
        const number2 = parseInt(req.query.number2);
        const sum = myCalculator.add(number1, number2);
        res.status(200);
        res.json({ success: true, data: sum });
    } catch (e) {
        throw Error(e.message);
    }
};

exports.subtractOperationByTwoParams = (req, res) => {
    try {
        const number1 = parseInt(req.query.number1);
        const number2 = parseInt(req.query.number2);
        const total = myCalculator.subtract(number1, number2);
        res.status(200);
        res.json({ success: true, data: total });
    } catch (e) {
        throw Error(e.message);
    }
};

exports.multiplyOperationByTwoParams = (req, res) => {
    try {
        const number1 = parseInt(req.query.number1);
        const number2 = parseInt(req.query.number2);
        const total = myCalculator.multiply(number1, number2);
        res.status(200);
        res.json({ success: true, data: total});
    } catch (e) {
        throw Error(e.message);
    }
};

exports.divideOperationByTwoParams = (req, res) => {
    try {
        const number1 = parseInt(req.query.number1);
        const number2 = parseInt(req.query.number2);
        const total = myCalculator.divide(number1, number2);
        res.status(200);
        res.json({ success: true, data: total });
    } catch (e) {
        throw Error(e.message);
    }
};

exports.addByList = (req, res) => {
    try {
        const listElements = JSON.parse(req.query.list).numbers;
        const sum = myCalculator.addByListArr(listElements);
        res.status(200);
        res.json({ success: true, data: sum });
    } catch (e) {
        throw Error(e.message);
    }
};

exports.subtractByList = (req, res) => {
    try {
        const listElements = JSON.parse(req.query.list).numbers;
        const total = myCalculator.subtractByListArr(listElements);
        res.status(200);
        res.json({ success: true, data: total });
    } catch (e) {
        throw Error(e.message);
    }
};

exports.multiplyByList = (req, res) => {
    try {
        const listElements = JSON.parse(req.query.list).numbers;
        const total = myCalculator.multiplyByListArr(listElements);
        res.status(200);
        res.json({ success: true, data: total });
    } catch (e) {
        throw Error(e.message);
    }
};

exports.divideByList = (req, res) => {
    try {
        const listElements = JSON.parse(req.query.list).numbers;
        const total = myCalculator.divideByListArr(listElements);
        res.status(200);
        res.json({ success: true, data: total });
    } catch (e) {
        throw Error(e.message);
    }
};



