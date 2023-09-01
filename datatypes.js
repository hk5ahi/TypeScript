"use strict";
let fname = "Muhammad Hanan";
// fname=10;
//String
let uname;
uname = "m.hanan";
let upperUName;
upperUName = uname.toUpperCase();
console.log(upperUName);
//number
let number1;
number1 = 20;
let string1;
string1 = "25";
let result;
console.log(result = parseInt(string1));
//Lists
let numbersList;
numbersList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let result1 = numbersList.filter((x) => x > 3);
console.log(result1);
let fruitName = 2 /* fruits.mango */;
//tuples
let swapNumbers;
function swap(a, b) {
    swapNumbers = [b, a];
    return swapNumbers;
}
swapNumbers = swap(10, 20);
console.log(swapNumbers);
