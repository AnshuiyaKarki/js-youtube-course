//for..in loops
// for...in is mainly used to loop through the keys (property names) of an object.

let fruits=["apple","banana","orange"]

for (const fruit in fruits){
    console.log(fruits[fruit])
}

let myObject={
    "js":"javascript",
    "py":"python",
    "css":"cascading style sheet"
}

for (const obj in myObject){
    console.log(obj) // returns key
}

for (const obj in myObject){
    console.log(`${obj} is shortcut for ${myObject[obj]}`)
}

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

// for (const key in map){
//     console.log(key)
// } ??/

