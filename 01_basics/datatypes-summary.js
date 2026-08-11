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

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//Stack(stores Primitive data type), Heap(Non primitive data type)

let myYoutubename='anshuiyakarkidotcom'
let anothername=myYoutubename

console.log(anothername)
//now lets change anothername to smth else 
anothername='anshuiyagoogle'
console.log(anothername)
console.log(myYoutubename)
//original value not changed cause changes are made to copy 


let UserOne={
    email:'anshuiya@google.com',
    designation:'sde'
}

let UserTwo={
    email:'anshuiya@google.com.us',
    designation:'data scientist'
}

console.log(UserTwo)


//changing usertwo email
UserOne=UserTwo


UserOne.designation='data analyst'

console.log(UserOne) //shows the same thing
console.log(UserTwo) //shows the same thing


// Non-primitive variables store a reference to the actual data in the heap,
//  so modifying the data through the reference also modifies the original data.


