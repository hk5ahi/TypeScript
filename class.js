"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _EmployeeInformation_id;
Object.defineProperty(exports, "__esModule", { value: true });
class EmployeeInformation {
    constructor() {
        _EmployeeInformation_id.set(this, void 0);
        __classPrivateFieldSet(this, _EmployeeInformation_id, 1, "f");
        this.fullName = { firstName: "Muhammad", lastName: "Sahi", middleName: "Hanan" };
        this.age = 23;
        this.salary = 10000;
    }
    //static method
    static getAge() {
        return 23;
    }
    //getter and setter
    get Salary() {
        return this.salary;
    }
    set Salary(value) {
        this.salary = value;
    }
    //string literal
    getFullNameWithAge() {
        if (this.fullName.middleName) {
            return `${this.fullName.firstName} ${this.fullName.middleName} ${this.fullName.lastName} ${this.age}`;
        }
        else {
            return `${this.fullName.firstName} ${this.fullName.lastName} ${this.age}`;
        }
    }
}
_EmployeeInformation_id = new WeakMap();
let user = {
    id: 1, fullName: { firstName: "Muhammad", lastName: "Hanan" }, age: 23, email: "mohammad@gmail.com", password: "123456"
};
let { fullName: { firstName: userName }, password: userPassword } = user;
//interface implementation
class LoginClass {
    getUserDetails() {
        return user;
    }
}
let obj1 = new EmployeeInformation();
let fullNameWithAge = obj1.getFullNameWithAge();
console.log(fullNameWithAge);
console.log(EmployeeInformation.getAge());
console.log(obj1.Salary);
obj1.Salary = 20000;
console.log(obj1.Salary);
let obj2 = new LoginClass();
console.log(obj2.getUserDetails());
console.log(userName);
console.log(userPassword);
