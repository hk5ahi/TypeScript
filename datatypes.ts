let fname="Muhammad Hanan";
// fname=10;
//String
let uname:String;
uname="m.hanan";
let upperUName:String;
upperUName=uname.toUpperCase();

console.log(upperUName);
//number

let number1:number;
number1=20;

let string1:string;
string1="25";


let result:number;
console.log(result=parseInt(string1));
//Lists
let numbersList:Array<number>;
numbersList=[1,2,3,4,5,6,7,8,9,10];
let result1:number[]=numbersList.filter((x)=>x>3);
console.log(result1);
//enums

const enum fruits{
    apple,
    banana,
    mango,
    orange
}

let fruitName:fruits=fruits.mango;
//tuples

let swapNumbers:[number,number];

function swap(a:number,b:number){
    swapNumbers=[b,a];
    return swapNumbers;
}

swapNumbers=swap(10,20);
console.log(swapNumbers);