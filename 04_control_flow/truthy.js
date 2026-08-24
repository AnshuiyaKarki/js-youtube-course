// falsy values

// false,0,-0,BigInt 0n, "",null,undefined,Nan

//everything else is truthy values 
//truthy values
// "0",'false'." ",[],{},function(){}

//to check if array in empty or not 
const userEmail=[]
if (userEmail.length==0){
    console.log("Array is empty")
}

const emptyObj={}
if (Object.keys(emptyObj).length==0){
    console.log("empty object")
}

//Null Coelescing Operator(??):null undefined
//Returns the right-side value only if left side is null or undefined.
// Otherwise, returns the left-side value.

let val1,val2
val1=5??10

val2=null??10

val3 = undefined??20??30

console.log(val1)
console.log(val2)
console.log(val3)

//Terniary Operator 
let x=5;
((x%2)==1)?console.log("odd"):console.log("even")









