{
    // ternary  operator || optional chaining || nullish coalescing operator

    const age: number =15;

    if(age >=18){
        console.log("adult");
     }else{
        console.log("Not adult");
        
     }

     const isAdult = age >= 18 ? "adult": "not Adult";

     console.log({isAdult});

     //nullish coalescing operator
     //null / undefined ---> decision Making

     const isAuthenticated = "" ;
     const result1 = isAuthenticated ?? "Guest"

     const result2 = isAuthenticated ? isAuthenticated : "Guest";

     console.log({result1},{result2});

     type User = {
        name: string;
        address:{
            city : string;
            road: string;
            presentAddress:string;
            permanentAdress?: string;
        }
     }
     

     const user :User ={
        name:"Ashiq",
        address:{
            city:"DHK",
            road:"A Road",
            presentAddress:"DHK Rd",
        }
     };
     
     const permanentAdress = user?.address?.permanentAdress ?? "No Permanent Address";
     console.log({permanentAdress});
     
    //
}