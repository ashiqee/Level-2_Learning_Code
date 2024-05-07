{
    // generic type


    type GenericArray<T> = Array<T>


    // const rollNumbers : number []= [3,6,8];
    const rollNumbers : GenericArray<number>= [3,6,8];


    // const mentors : string []= ["Mr.x", "Y", "X", "Z"]
    // const mentors : Array<string>= ["Mr.x", "Y", "X", "Z"]
    const mentors : GenericArray<string>= ["Mr.x", "Y", "X", "Z"]

    // const boolArray: boolean[]= [true,false,true];
    // const boolArray: Array<boolean>= [true,false,true];
    const boolArray: GenericArray<boolean>= [true,false,true];

interface User {
    name: string;
    age:number;
}
const user : GenericArray<User>= [
    {
        name: 'Mezba',
        age: 100,
    },
    {
        name: "Jhankar Mahbub",
        age: 110,
    }
]

    //generic tuple

    type GenericTuple<x,y> = [x,y]
    const man: GenericTuple<string,string> = ['M X', 'M Y']


    const UserWithID :GenericTuple<number,{name:string,email:string}> = [1234, {name: "persian", email:"a@gmail.com"}]

}