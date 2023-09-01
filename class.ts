class EmployeeInformation
{
    id!: number;
    FirstName!: string;
    LastName!: string;
    age!: number;
    salary!: number;
constructor(id:number,FirstName:string,LastName:string,age:number,salary:number) {

    this.id=id;
    this.FirstName=FirstName;
    this.LastName=LastName;
    this.age=age;
    this.salary=salary;
}

}

let obj1:EmployeeInformation=new EmployeeInformation(1,"Muhammad","Hanan",25,50000);

console.log(obj1);
