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


function one(){
     const username='anshuiya'
     
     function two(){
        const website='anshuiya@google.com'
        console.log(username)
     }
     two()
    //  console.log(website)->scope finished so cant be accessed
}
one()

// seeing if it works with if condition 
if (true){
    username='anshuiya'
    if (username==='anshuiya'){
         employer=" Google"
        console.log(username+employer)
    }
    console.log(employer)
    // accessible as we didnt use const,let,var s avascript treats it as a global scope variable
}



if (true){
    const username='anshuiya'
    if (username==='anshuiya'){
        const employer=" Google"
        console.log(username+employer)
    }
    // console.log(employer)//shows error now
}


// +++++++++++++interesting hoisting concept++++++++++++++


//Hoisting = JavaScript's behavior of handling declarations before executing the code.


console.log(addOne(5))//shows no error
function addOne(num){
    return num+1
}
//another way of declaration
// console.log(addTwo())//shows error 
const addTwo=function (num){
    return num+2
}


