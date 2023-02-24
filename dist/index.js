"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.greet = void 0;
function greet(data) {
    console.log(`Hello ${data.name}!You are ${data.age} years old`);
    return data;
}
exports.greet = greet;
