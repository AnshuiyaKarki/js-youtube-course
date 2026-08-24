//if 
//<,>,<=,>=,==,!=,===
if (2=='2'){
    console.log("executed")
    
}
if (2==='2'){
    console.log("executed")
}

let temp=40

if (temp>50){
    console.log("temp greater than 50")
}else{
    console.log("temp less than 50")
}

const score=400

if (score>100){
    let power="fly"
    console.log(`Power of User:${power}`)
}

const balance =1000 
if (balance>500) console.log("test1"),console.log("test2")

console.log("hello")

if (balance<500){
    console.log("less than 500")
}else if (balance<750){
    console.log("less than 750")
}else{
    console.log("less than 1200")
}

const userLoggedIn=true
const debitCard=true
const loggedInFromGoogle=false;
const loggedInFromEmail=true;

if (userLoggedIn && debitCard){
    console.log("Allow to shop")
}

if (loggedInFromGoogle || loggedInFromEmail){
    console.log("User logged in")
}






