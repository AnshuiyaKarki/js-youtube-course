// let myName="Anshuiya   "
// let myEmployer="Google    "

// myName.trueLen I want to implement smth like this that gives me truelength without white spaces 


let myHeros = ["thor", "spiderman"]


let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.Anshuiya=function(){
  console.log("Anshuiya is in all objects")
}

heroPower.Anshuiya()
myHeros.Anshuiya()

Array.prototype.HiAnshuiya=function(){
  console.log("Anshuiya says hi")
}
myHeros.HiAnshuiya()
// console.log(heroPower.HiAnshuiya()) wont work cause all arrays are objects but all objects are not array.

//inheritance
const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}
const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__=User

//modern syntax 
Object.setPrototypeOf(TeachingSupport,Teacher) //(destination,source) destination inherits properties of source.


let AnotherUsername="Anshuiya    "

String.prototype.trueLen=function(){
  console.log(`${this}`.trim().length)
}

AnotherUsername.trueLen()






















