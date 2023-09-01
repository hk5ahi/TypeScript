
function add(number1:number,number2:number,number3?:number):number{
    return number3? number1+number2+number3:number1+number2;
}

const sub=(number1:number,number2:number,number3:number=10):number=>number1-number2-number3;

const mul=function(number1:number,number2:number):number{
    return number1*number2;
}
console.log(add(10,20));
console.log(sub(10,20));
console.log(mul(10,20));

//Rest Parameters
function addRestParameters(number1:number,...numbers:number[]):number{
    return number1+numbers.reduce((a,b)=>a+b,0);
}
console.log(addRestParameters(10,...[20,30,40,-50,60,70,80,90,100]));
//Generic Functions

function concatTwoList<T>(item1:T[],item2:T[]):T[]{
    return [...item1,...item2]; //spread operator
}
console.log(concatTwoList<number>([1,2,3,4,5],[6,7,8,9,10]));
console.log(concatTwoList<string>(["a","b","c","d","e"],["f","g","h","i","j"]));