//  Primitive
// 7 types : String, Number, Boolean, Null, undefined, symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;


const id = Symbol('123')
const anotherId = Symbol('123')

console. log(id === anotherId);

const bigNumber = 23345434323245467897654334243242n;     // undefined 


// Refrence type (Non primitive )
// Array, Objects, Functions

const heros = ["aditya", "harshit", "Deepak"]

let obj = {
  name : "Aditya",
  age : 22
}


const myFun  = function(){};



// ***********************************************************

// two type of memory
// 1. stack (primitive), 2.  Heap (Non-primitive)
let myYoutubeName = "adityakumar@gmail.com";
let anothername = myYoutubeName;
anothername = "chaiaurcode ";

console.log(myYoutubeName);
console.log(anothername);


let user1 = {
  email : "user@google.com",
  upi: "upi@123 "
}


let user2 = user1;

user2.email = "Aditya@gmail.com";

console.log(user1.email);
console.log(user2.email);
