{
    //spread operator
    // rest operator
    //destructuring


    //learn spread operator
    const bros1:string[] = ["Mir", "firroz", "Mizan"]
    const bros2:string[] = ["Tanmoy", "Nahid", "Rahat"]

    bros1.push(...bros2)


    const mentors1 = {
        typescript: "Mezba",
        redux:"Mir",
        dbms:"Mizan",
    }

    const mentors2 = {
        prisma: "Firoz",
        next:"Tonmoy",
        cloud:"Nahid",
    }

const mentorList = {
    ...mentors1,
    ...mentors2,
}


//learn rest operator

// const greetFriends = (frnd1,frnd2,frnd3)=>{  --------normal not best
// console.log(`Hi ${frnd1} ${frnd2} ${frnd3}` );

const greetFriends = (...frnds:string[])=>{  //rest operator
    frnds.forEach((friend:string)=>console.log(`Hi ${friend} ` )
    )
    
}

greetFriends("Abul","Kabul","babul")


}