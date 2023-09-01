"use strict";
function add(number1, number2, number3) {
    return number3 ? number1 + number2 + number3 : number1 + number2;
}
const sub = (number1, number2, number3 = 10) => number1 - number2 - number3;
const mul = function (number1, number2) {
    return number1 * number2;
};
console.log(add(10, 20));
console.log(sub(10, 20));
console.log(mul(10, 20));
//Rest Parameters
function addRestParameters(number1, ...numbers) {
    return number1 + numbers.reduce((a, b) => a + b, 0);
}
console.log(addRestParameters(10, ...[20, 30, 40, -50, 60, 70, 80, 90, 100]));
//Generic Functions
function concatTwoList(item1, item2) {
    return [...item1, ...item2]; //spread operator
}
console.log(concatTwoList([1, 2, 3, 4, 5], [6, 7, 8, 9, 10]));
console.log(concatTwoList(["a", "b", "c", "d", "e"], ["f", "g", "h", "i", "j"]));
