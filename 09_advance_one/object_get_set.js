
const User = {
    _email: "abc@gmail.com",

    // "email" is the name the outside world uses.
    // The getter name does NOT have to match the property being stored.
    //
    // For example, we could have written:
    // get apple() {
    //     return this._email;
    // }
    //
    // Then we would access it using:
    // user.apple
    //
    // So the getter name is just the name used to access the getter.

    get email() {

        // The getter is actually a function body.
        // JavaScript executes this body automatically
        // when we access user.email.
        //
        // The RETURN statement decides what value we get.
        // It could return _email, _name, _password, etc.
        return this._email;
    },

    set email(value) {

        // The setter runs automatically when we assign:
        // user.email = "new@gmail.com"
        //
        // Here we explicitly tell it where to store the value.
        this._email = value;
    }
};

const user = Object.create(User);

// No () because email is a getter.
// Accessing user.email automatically runs get email().
console.log(user.email);

// Setter runs automatically when we assign a value.
user.email = "new@gmail.com";

console.log(user.email);
