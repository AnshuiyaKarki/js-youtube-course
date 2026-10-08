
// getOwnPropertyDescriptor()
// → Shows the hidden settings of a property:
//   value, writable, enumerable, configurable

const descripter = Object.getOwnPropertyDescriptor(Math, "PI")

console.log(descripter);

// Math.PI has writable: false
// → Its value cannot be changed
// → So this does NOT change PI to 5

console.log(Math.PI);
Math.PI = 5
console.log(Math.PI);


// We can create our own objects and control their property settings
const chai = {
    name: 'ginger chai',
    price: 250,
    isAvailable: true,

    orderChai: function(){
        console.log("chai nhi bni");
    }
}

// Check the hidden settings of chai.name
// By default, normal object properties are:
// writable: true      → value can be changed
// enumerable: true    → appears in Object.entries() / loops
// configurable: true  → property settings can be changed/deleted

console.log(Object.getOwnPropertyDescriptor(chai, "name"));


// defineProperty()
// → Lets us create/change the settings of a property
Object.defineProperty(chai, 'name', {
    // writable: false,    // uncomment → chai.name cannot be changed
    enumerable: false     // name will NOT appear in Object.entries(chai)
})

console.log(Object.getOwnPropertyDescriptor(chai, "name"));


// Object.entries() gives us the object's enumerable properties
// Since name is now enumerable: false, "name" is skipped
//
// typeof value !== 'function'
// → Don't print the orderChai function
// → Only print normal data properties

for (let [key, value] of Object.entries(chai)) {
    if (typeof value !== 'function') {
        
        console.log(`${key} : ${value}`);
    }
}
