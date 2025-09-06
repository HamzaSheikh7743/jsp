//++++++++++++++++++
// Stack and Heap Memory
// stack (Primitive), heap (Non-Primitive)

let myname = "hamza";
let anothername = myname;
myname = "chinmay";

console.log(myname);
console.log(anothername);

let user = {
    email : "user@email.com",
    upi : "user@upi" 

}

let usertwo = user;
usertwo.email = "hamza@email.com";