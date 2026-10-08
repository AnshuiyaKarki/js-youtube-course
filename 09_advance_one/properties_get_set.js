
function User(email, password){

    // Store the actual values in separate properties.
    // _email and _password are used so the getter/setter
    // can work with "email" and "password" without recursion.
    this._email = email;
    this._password = password;


    // Object.defineProperty() lets us define custom behavior
    // for an object's property.
    //
    // IMPORTANT:
    // Object.defineProperty() is NOT specifically for functions.
    // It is a general way to define/configure object properties.
    //
    // In a class, we can use the cleaner:
    // get email() { } and set email(value) { }
    //
    // But inside a normal constructor function, we cannot write:
    // get email() { }          ❌
    // set email(value) { }     ❌
    //
    // So we use Object.defineProperty() instead.

    Object.defineProperty(this, 'email', {

        // GETTER → runs when we READ:
        // chai.email
        get: function(){
            return this._email.toUpperCase();
        },

        // SETTER → runs when we ASSIGN:
        // chai.email = "new@email.com"
        set: function(value){
            this._email = value;
        }
    });


    // Same getter/setter concept for password.
    Object.defineProperty(this, 'password', {

        // GETTER → runs when we READ:
        // chai.password
        get: function(){
            return this._password.toUpperCase();
        },

        // SETTER → runs when we ASSIGN:
        // chai.password = "newpassword"
        set: function(value){
            this._password = value;
        }
    });
}


// "new" creates a User object and runs the constructor.
const chai = new User("chai@chai.com", "chai");


// Reading chai.email → GETTER runs
// → returns _email in uppercase
console.log(chai.email);


// ### Remember

// CLASS
// get email() {}
// set email(value) {}

// CONSTRUCTOR FUNCTION
// Object.defineProperty(this, "email", {
//     get: function() {},
//     set: function(value) {}
// })

// Same concept.
// Different syntax.
