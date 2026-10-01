// ==================== OBJECT ====================

const User = {
    username: "Anshuiya",
    employer: "Google",
    isLoggedIn: true,

    greetings: function () {
        console.log(`Hello ${this.username}`);
    }
};

// Object method call:
// "this" refers to the object that called the method → User
console.log(User.greetings());


// ==================== CONSTRUCTOR FUNCTION ====================

// JavaScript allows constructor functions to create objects/instances.
// A class is another way to create objects, but here we are using a function.

function user(username, employee, loggedIn) {

    // "this" refers to the object being created/used.
    this.username = username;
    this.employee = employee;
    this.loggedIn = loggedIn;

    this.greetings = function () {
        console.log(`Hello ${this.username}`);
    };

    return this;
}


// WITHOUT "new":
// user() is just a normal function call.
// In this case, "this" does NOT create a new instance.
// In Node.js, `this` at the top level is NOT the global object.
// So this is NOT the way to create separate users.
const UserOne = user("Anshuiya", "Google", true);

console.log(UserOne);


// WITH "new":
// "new" creates a NEW object/instance.
// Then "this" points to that newly created object.
// So UserTwo gets its own username, employee, loggedIn, etc.

const UserTwo = new user("Ashutosh", "Google", true);

console.log(UserTwo);


// IMPORTANT:
// new user(...) → creates a NEW instance every time.
//
// const UserOne = user(...) → normal function call;
// it does NOT automatically create an instance.
//
// So:
//
// new → new object + this points to that object
// no new → normal function call


// ==================== THIS ====================

// `this` depends on HOW the function is called.
//
// In a browser's normal top-level code:
// this → window
//
// In Node.js/CommonJS:
// top-level `this` → module.exports (not window)
//
// Inside `new user(...)`:
// this → the NEW object being created
//
// Inside User.greetings():
// this → User, because User called the method.