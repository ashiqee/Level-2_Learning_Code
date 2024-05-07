{
    // contraints

    
    const  addCourseToStudent =<T extends {id:number; name:string;email:string}>(student: T)=>{
        const course = "Next level Web Development"
    
    return {
        ...student,
        course
    }
    }
const student3 = addCourseToStudent({
    id:1223, 
    name: "Mr z", 
    email:"Emni", 
    emnai:"asd"})

    const student1 = addCourseToStudent<{
        id:number;
        name:string;
        email:string;
        devType:string;
    }>({
        id:222,
        name:"Mr X",
        email: "x@gmail.com",
        devType: "NLWD"
    })
    const student2 = addCourseToStudent({id:44,name:"Mr Y",email: "y@gmail.com",
        hasWatch:"MI Watch"
    })



    //
}