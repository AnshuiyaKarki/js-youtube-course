const user={
    username:"Anshuiya",
    employer:"google",
    welcome: function(){
        console.log(`${this.username}, welcome to the website`)
       console.log(this)//shows the context of the place it is being called in which is the object that 'this' is referring to
    }
}

user.welcome()
console.log(this)// In Node.js, top-level `this` is usually `{}`. In a browser, top-level `this` is usually the `window` object.
user.username="Anshuiya Karki"


//what happens when this is called in function

function boba(){
    let username="Anshuiya"
    console.log(this.username)//shows undefined as it is a local variable not a property of this
    console.log(this) // in a normal function call, `this` refers to Node.js's global object
  // It contains globally available functions and values like setTimeout, fetch, console, etc.
}
 
 boba()

 //Arrow function

 function addTwo(num1,num2){
    return num1+num2;
 }
 console.log(addTwo(3,3))

 const addtwo= function(num1,num2){
    return num1+num2
 }
 console.log(addtwo(5,2))

console.log("Arrow function")
 const Addtwo= (num1,num2)=>{
    return num1+num2
 }
 console.log(Addtwo(5,3))

 //implicit return 
 const AddTwo= (num1,num2)=>(num1+num2)// No `return` is needed with implicit return. With `{}`, you need to use `return`.
 console.log(AddTwo(5,4))

// To return an object directly, wrap it in `()`.

 const returnObject=()=>({username:"Anshuiya"})

// Arrow functions don't have their own `this`; they inherit it from the surrounding scope.normal functions do
 const User = {
  name: "Anshuiya",
  greet: () => {
    console.log(this.name);
  }
};

User.greet(); // usually undefined
     
 



 









