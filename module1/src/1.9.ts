{
//Type Alias

type Student ={
    name:string;
    age:number;
    gender:string;
    contactNo?:string;
    address:string;
}
const student1:Student={
    name: "Ashiq",
    age:27,
    gender:"Male",
    contactNo:"012121212",
    address:"DB",
}
const student2:Student={
    name: "Ashiq",
    age:27,
    gender:"Male",
    contactNo:"012121212",
    address:"DB",
}
const student3:Student={
    name: "Mahmud",
    age:27,
    gender:"Male",
   address:"DB",
}


type UserName = string
type IsAdmin =boolean
const userName:UserName="Ashiqqwww"
const isAdmin: IsAdmin=true


type Add = (num1:number,num2:number)=>number;

const add: Add =(num1,num2)=>num1+num2;
    //
}