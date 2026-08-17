//singleton->An object where only one instance of that object exists.this is ensured when declared by constructor .literals however do not create singleton
//declared by literals or constructor 

//object literals 
const mySym=Symbol("key1")
const JsUser={
    name:'Anshuiya Karki',
    "favorite food":"momo",
    [mySym]:'mykey1',
    email:"anshuiya@google.com",
    isLoggedIn:true,
    age:22
}
//access objects with . and [] sometimes [] the only option
console.log(JsUser.email)
console.log(JsUser["favorite food"])
console.log(JsUser)

//can also change values 
JsUser.email="anshuiya@meta.com"
console.log(JsUser)
 

 //can stop the changing by freezing ythe object
//  Object.freeze(JsUser)

 JsUser.age=23
 console.log(JsUser)//no error but doesnt change the value

 JsUser.greetings = function(){
    console.log("Hello Js User")
 }
 console.log(JsUser.greetings())

JsUser.greetingsTwo=function(){
    console.log(`Welcome to JS: ${this.name}`)
}

console.log(JsUser.greetingsTwo())

console.log(JsUser)






