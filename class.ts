import { fullName ,Login,User } from "./interface"; // import interface
class EmployeeInformation
{
    #id: number;
    fullName: fullName;
    age: number;
    protected salary: number;


constructor() {

    this.#id= 1;
    this.fullName={firstName: "Muhammad", lastName: "Sahi",middleName:"Hanan"};
    this.age= 23;
    this.salary= 10000;
}

//static method
   static getAge():number{

    return 23;
   }

//getter and setter
get Salary():number{

    return this.salary;
}

set Salary(value:number){

    this.salary=value;
}
//string literal
    getFullNameWithAge(): string {
        if (this.fullName.middleName) {
            return `${this.fullName.firstName} ${this.fullName.middleName} ${this.fullName.lastName} ${this.age}`;
        } else {
            return `${this.fullName.firstName} ${this.fullName.lastName} ${this.age}`;
        }
    }

}

let user: User = {
id:1,fullName:{firstName:"Muhammad",lastName:"Hanan"},age:23,email:"mohammad@gmail.com",password:"123456"};
let {fullName:{firstName:userName},password:userPassword}=user; // object destructuring
//interface implementation
class LoginClass implements Login
{
    getUserDetails(): User {
        return user ;
    }

}

let obj1:EmployeeInformation=new EmployeeInformation();
let  fullNameWithAge=obj1.getFullNameWithAge();

console.log(fullNameWithAge);
console.log(EmployeeInformation.getAge());
console.log(obj1.Salary);
obj1.Salary=20000;
console.log(obj1.Salary);
let obj2:LoginClass =new LoginClass();
console.log(obj2.getUserDetails());
console.log(userName);
console.log(userPassword);

