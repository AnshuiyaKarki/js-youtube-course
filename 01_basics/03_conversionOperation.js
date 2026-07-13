let score = "hitesh"

//console.log(typeof score);
//console.log(typeof(score));

let valueInNumber = Number(score)
//console.log(typeof valueInNumber);
//console.log(valueInNumber);


// "33" => 33
// "33abc" => NaN
//  true => 1; false => 0

let isLoggedIn = "hitesh"

let booleanIsLoggedIn = Boolean(isLoggedIn)
//  console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false
// "hitesh" => true

let someNumber = 33

let stringNumber = String(someNumber)
// console.log(stringNumber);
// console.log(typeof stringNumber);

// *********************** Operations ***********************


console.log(2+2)
console.log(2*2)
console.log(2/3)
console.log(2%3)
console.log(2**2)
console.log(2-2)

let str1="Hello"
let str2="Anshuiya"

let str3=str1+str2
console.log(str3)

let num1,num2,num3
num1=num2=num3=2+2

let a=+"5"
console.log(a)

// This happens because of type coercion in JavaScript.

// ➕ If one value is a string, + does string concatenation.
// ➕ If both values are numbers, + does addition.
// JavaScript evaluates left to right.

// String comes first → everything after becomes a string.
// Numbers come first → they add until a string appears.

console.log("1"+2) //12=>'1'+ 2
console.log("1"+2+2)//122->'12'+2->122
console.log(1+2+"2")//32->3+'2'->32

let count=101;
count++; 
// If its value is used in an expression (print, assignment, comparison),
//  JavaScript uses the old value first, then increments
// If its value is not used, it simply increments.
console.log(count)
console.log(count++)
console.log(count)

