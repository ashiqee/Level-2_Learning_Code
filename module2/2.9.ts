{
    //condition type

    // type CheckString<T> = T extends string ? true : false;

    type CheckString<T> = T extends string ? string : unknown;


    type IsString = CheckString<string>



    interface Person {
        name: string;
        age: number;
    };


    // type hasOwnProperty<T>=T extends 'name'| 'age' ? true: false;

    type hasOwnProperty<T>=T extends keyof Person ? true: false;

    type checking = hasOwnProperty<"name">
    //
}