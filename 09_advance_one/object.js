// PROTOTYPE
//
// A function that is used as a constructor has a prototype object.
//
// We use that prototype to store methods/properties
// that objects created by that constructor can share.



// Functions are also objects in JavaScript
function multipleBy5(num) {
    return num * 5
}

// We can add properties to a function
multipleBy5.power = 2

console.log(multipleBy5(5));        // 25 → calling the function
console.log(multipleBy5.power);     // 2  → accessing its property


// Every normal function has a prototype property
// prototype itself contains an object
multipleBy5.prototype.hello = "Hi"

console.log(multipleBy5.prototype); // { hello: "Hi" }


// Constructor function
function createUser(username, score) {
    // "this" refers to the new object created by "new"
    this.username = username
    this.score = score
}


// Add a method to createUser's prototype
// All objects created using "new createUser()" can use this method
createUser.prototype.increment = function() {
    this.score++
}


// Another method added to the prototype
createUser.prototype.printMe = function() {
    console.log(`price is ${this.score}`)
}


// "new" creates a new object
// "this" points to that new object
// The constructor fills that object with username and score
const chai = new createUser("chai", 25)


// chai can access printMe() through createUser's prototype
console.log(chai.printMe())


// 1. new creates an empty object
//        ↓
//      {}

// 2. The object is connected to createUser.prototype
//        ↓
//      {} ─────→ createUser.prototype
//                  ├── increment()
//                  └── printMe()

// 3. this points to the new object
//        ↓
//      this → {}

// 4. createUser() fills the object
//        ↓
//      {
//        username: "chai",
//        score: 25
//      }

// 5. The new object is returned
//        ↓
// chai
//  │
//  ├── username → "chai"
//  ├── score    → 25
//  │
//  └── [[Prototype]] ─────────→ createUser.prototype
//                                │
//                                ├── increment()
//                                └── printMe()