"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function add(a, b) {
    return a + b;
}
function greet(name, age) {
    if (age) {
        console.log(`Hello, my name is ${name} and I am ${age} years old.`);
    }
    else {
        console.log(`Hello, my name is ${name}`);
    }
}
function power(base, exp = 2) {
    return base ** exp;
}
function combine(a, b) {
    if (typeof a === "number" && typeof b === "number") {
        return a + b; // addition
    }
    if (typeof a === "string" && typeof b === "string") {
        return a + b; // concaténation
    }
    throw new Error("Les types doivent être tous deux 'number' ou tous deux 'string'.");
}
