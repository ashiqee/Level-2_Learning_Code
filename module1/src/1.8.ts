// destructring

const user = {
    id:345,
    name:{
        firstName:"Ashek",
        middleName:"Mahmud",
        lastName: "Ashiq",
    },
    contactNo:"016100000",
    address:"BD",
};

const {
    contactNo,
    name:{
    middleName
}

}=user;



// array destructuring

const myFriends = ['chandler', 'joue', 'orss','rscel','moniza',"jessy"];

const[,,bestFriend,...rest]=myFriends;