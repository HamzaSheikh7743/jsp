//primitive

//7 types : String, Number, Boolean, Null, Undefined, Symbol, BigInt

const score =100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail; //undefined  

const id = Symbol('123')
const anotherId = Symbol('123')
//console.log(id===anotherId); //false

const bigNumber = 1234567890123456789012345678901234567890n
//console.log(bigNumber);
//Refrence (non-primitive) : 
//Object (Arrays, Functions, Dates, etc)


const heros = ["shaktiman", "naagraj", "doga"];
const myObj = {
    name : "chinmay",
    age : 34
}

const myFunction = function(){
    console.log("hello world");
}


console.log(typeof heros);

