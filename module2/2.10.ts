{


    // Mapped types 


    type Person ={
        name: string;
        id:number;
        age:number;
    }
    type PersonReadOnly ={
        readonly name: string;
      readonly  id:number;
    readonly    age:number;
    }


    const person1: Person= {
        name:" Ahikq",
        id:101,
        age:16
    };

    person1.name = "Jhankar vai";

// todo  readonly usaseg






    //

}