const name="Anshuiya Karki" // string declaration
const employer='Google'
console.log(name+employer) //bad way to concatenate

console.log(`My name is ${name} and I am employed at ${employer}`)

//another way to declare string

const gameName= new String('anshuiyagame')
console.log(gameName)
//to access values
console.log(gameName[0])

//methods
console.log(gameName.length) //to find length
console.log(gameName.toUpperCase()) // to convert to uppercase
console.log(gameName.charAt(5))//to see what character is at that index
console.log(gameName.indexOf('u'))// to see the index of that character

console.log('TESTING')
const newString=gameName.substring(0,4)// ignores negatve values if given as arguement 
console.log(newString)

console.log("HERE")
const anotherString=gameName.slice(-8,-4) 
//goes from left to right so returns nothing if that isnt satisfied

console.log(anotherString)



const newStringOne="    anshuiya   "
console.log(newStringOne)
console.log(newStringOne.trim())


const url="https://anshuiya.google.com/anshuiya%20karki"

console.log(url.replace('%20','-'))

console.log(url.includes('google'))

const trialstring='Anshuiya-Karki'
console.log(trialstring.split('-'))

