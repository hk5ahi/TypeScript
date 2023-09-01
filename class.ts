class EmployeeInformation
{
    id!: number;
    FirstName!: string;
    LastName!: string;
    age!: number;
    salary!: number;


}

let obj1:EmployeeInformation=new EmployeeInformation();
obj1.id=1;
obj1.FirstName="Muhammad";
obj1.LastName="Hanan";
obj1.age=25;
obj1.salary=50000;
console.log(obj1);