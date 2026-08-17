const tinderUser = new Object()
console.log(tinderUser)

tinderUser.id="123abc"
tinderUser.name="Sammy"
tinderUser.isLoggedIn=false
tinderUser.age=18

console.log(tinderUser)

const regularUser={
    name:{
        userfullname:{
            firstname: "Anshuiya",
            lastname:"Karki"
        }
    }
}

console.log(regularUser.name.userfullname.firstname)

//merging objects
const obj1={1:'a',2:'b'}
const obj2={2:'a',3:'b'}
const obj3={4:'a',5:'b'}

console.log({obj1,obj2,obj3}) //comes nested so 

//spread operator 
console.log({...obj1,...obj2,...obj3})

//assign function
console.log(Object.assign({},obj1,obj2,obj3))

const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

console.log(users[1]["email"])
console.log(users[1].email)

//checking key,values,entries
console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser))

//to check if property exists
console.log(tinderUser.hasOwnProperty('isLoggedIn'))






