"use strict";
class EmployeeInformation {
    constructor(id, FirstName, LastName, age, salary) {
        this.id = id;
        this.FirstName = FirstName;
        this.LastName = LastName;
        this.age = age;
        this.salary = salary;
    }
}
let obj1 = new EmployeeInformation(1, "Muhammad", "Hanan", 25, 50000);
console.log(obj1);
