export interface fullName{ //export interface
    firstName: string;
    middleName?: string; // ? means optional
    lastName: string;

}

export interface User { //interface for defining custom data type
    id: number;
    fullName: fullName;
    age: number;
    email: string;
    password: string;
}
export interface Login {

    getUserDetails(): User;
}