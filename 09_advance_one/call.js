
function SetUsername(username){
    // complex DB calls
    // `this` belongs to SetUsername unless we explicitly change it
    this.username = username
    console.log("called");
}


function createUser(username, email, password){
    // .call() runs SetUsername and makes `this` inside
    // SetUsername refer to the current `this` of createUser
    // So this.username gets added to the new `chai` object
    SetUsername.call(this, username)// .call() manually sets the `this` of SetUsername
// here, `this` is the new object created by createUser

   
    this.email = email
    this.password = password
}

const chai = new createUser("Anshuiya", "anshuiya@meta.com", "123")

console.log(chai);
