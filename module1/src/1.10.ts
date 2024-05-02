{
    //
    //Union types

//     type FrontendDeveloper = 'fakibazDeveloper' | "juniorDeveloper"
//     type FullstackDeveloper = 'FrontendDeveloper' | "BackendDeveloper"

// type Developer = FrontendDeveloper | FullstackDeveloper

//     const newDeveloper :FrontendDeveloper = "juniorDeveloper"

  

//     type User ={
//         name:string;
//         email:string;
//         gender:"male"|"female";
//         bloodGroup: "O+" | "A+"| "AB+"
//     }

//     const user1:User ={
//         name:"LORE",
//         email:'lore2com.',
//         gender:"female",
//         bloodGroup:"AB+",
//     }


    type FrontendDeveloper ={
        skills:string[];
        designation1:"Frontend developer"
    }

    type BackenddDeveloper ={
        skills:string[];
        designation2:"Backend developer"
    }

type FullstackDeveloper = FrontendDeveloper & BackenddDeveloper

const fullStackDeveloper : FullstackDeveloper={
    skills:["hmtl","CSS","react"],
    designation1: "Frontend developer",
    designation2: "Backend developer",

}


    //
}