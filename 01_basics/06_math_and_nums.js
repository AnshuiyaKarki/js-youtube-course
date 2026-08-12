const score=400
console.log(typeof(score))

//to explicitly specify that it is a number 
const balance = new Number(100)
console.log(balance)

console.log(balance.toString().length)//returns a string but doesnt convert the original data to string 
//cause primitive datatype
console.log(typeof(balance))

console.log(balance.toFixed(1)) //used to format a number to a specific number of decimal places.
console.log(balance.toPrecision(2))//controls the total number of significant digits in a number.


const hundred=100000
console.log(hundred.toLocaleString())//by default changes  it to english number formatting system
console.log(hundred.toLocaleString('en-IN'))//to change it to indian system

// ++++++++++++++++++++++++++++Maths++++++++++++++++++++++++++++++++++++++++++++++++

console.log(Math)
console.log(Math.abs(-4));
console.log(Math.round(4.6));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.9));
console.log(Math.min(4, 3, 6, 8));
console.log(Math.max(4, 3, 6, 8));


//commonly used function in javascript ->random
console.log(Math.random()) //returns a value between 0 and 1

// if we want to return a value between 1 and 10
console.log((Math.random()*10)+1) //shift to right and add 1 to avoid it giving 0
//to make it int
console.log(Math.floor((Math.random()*10)+1))


//sometimes a range is given random number between 10 and 20 so we do 
const max=20
const min=10

console.log(Math.floor((Math.random()*(max-min+1))+min))