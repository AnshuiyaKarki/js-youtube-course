let a =100 //global scope
if (true){
    let a=10
    console.log("INNER a:",a) //block scope
}
console.log("OUTER a:",a)
// console.log(a)->wont print
// console.log(b)->wont print
// console.log(c)//prints cause var → ignores the { } block and remains accessible outside it hence problematic
//var is function scoped which means as long as it is in the function it will display