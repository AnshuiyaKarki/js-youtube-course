
class User {
    constructor(email, password){

        // This looks like normal property assignment,
        // BUT because a setter for "email" exists below,
        // this actually calls the email setter.
        this.email = email;

        // Same thing here:
        // this calls the password setter below.
        this.password = password
    }


    // GETTER
    // Runs when we READ the property:
    // Anshu.email
    //
    // Getter and setter are normally used together:
    // setter → controls how the value is SET
    // getter → controls how the value is READ
    get email(){
        return this.Email.toUpperCase()
    }


    // SETTER
    // Runs when we ASSIGN a value:
    // this.email = email
    //
    // The constructor is NOT setting the value separately.
    // Constructor triggers the setter,
    // and the setter actually stores the value.
    set email(value){
        this.Email = value
    }


    // GETTER for password
    // Runs when we READ:
    // Anshu.password
    //
    // It returns the stored password + "anshuiya"
    get password(){
        return `${this._password}anshuiya`
    }


    // SETTER for password
    // Runs when we ASSIGN:
    // this.password = password
    //
    // The actual value is stored in _password.
    set password(value){
        this._password = value
    }
}


// Constructor runs here
// ↓
// this.email = "a@anshuiya.ai"
// ↓
// email setter runs
// ↓
// this.Email = "a@anshuiya.ai"
//
// Then console.log reads Anshu.email
// ↓
// email getter runs
// ↓
// this.Email.toUpperCase()
// ↓
// "A@ANSHUIYA.AI"

const Anshu = new User("a@anshuiya.ai", "abc")

console.log(Anshu.email);


// ### IMPORTANT: Why `Email` / `_password` have different names

// You **must store the value in a different property** inside the setter.

// Wrong:

// ```js
// set email(value) {
//     this.email = value;
// }
// ```

// This causes:

// ```text
// this.email = value
//       ↓
// setter runs
//       ↓
// this.email = value
//       ↓
// setter runs
//       ↓
// this.email = value
//       ↓
// ...
// ```

// Infinite recursion → **stack overflow**.

// So we use a different internal property:

// ```text
// email       → getter/setter
// Email       → actual stored value

// password    → getter/setter
// _password   → actual stored value
// ```
