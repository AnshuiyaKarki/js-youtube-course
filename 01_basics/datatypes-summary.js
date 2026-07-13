// //  Primitive->
// Primitive values are stored and copied by value.Changes are made to the copy of the value.

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;// by default if u do this it has value undefined. ie userEmail=undefined

const id = Symbol('123')//makes value unique
const anotherId = Symbol('123')

// console.log(id === anotherId);// can see that even w the same value both are different so returns false

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)-are stored as references, and the reference is copied. 
// changes are made to original alue

// Array, Objects, Functions


//array
const heros = ["shaktiman", "naagraj", "doga"];

//anything inside {} is bject stored in name value pair
let myObj = {
    name: "hitesh",
    age: 22,
}

//function
const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof heros);