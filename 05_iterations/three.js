//for of 
// for...of loops through the values of an iterable.
myArray=[1,2,3,4,5]

for (const arr of myArray){
    console.log(`value inside array is ${arr}`)
}

let greetings="Hello World!"

for (const greet of greetings ){
    console.log(`The character is ${greet}`)
}

//Maps

const maps=new Map()

maps.set("NP","Nepal")
maps.set("IN","India")
maps.set("USA","United States of America")

console.log(maps)

for (const [key,value] of maps){
    console.log(`${key} :- ${value}`)
}

//trying it in objects

myObject={
    game1:"Mario Kart",
    game2:"Plants vs Zombies"
}

// for (const key of myObject){
//     console.log(key)
// }
// for (const [key,value] of myObject){
//     console.log(`${key} :- ${value}`)
// }
//does not work cause Object is not iterablew