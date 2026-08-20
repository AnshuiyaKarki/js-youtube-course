function sayMyname(){
    console.log("A")
    console.log('N')
    console.log("S")
    console.log('H')
    console.log("U")
}

sayMyname()

function addTwonumbers(number1,number2){
    if (!number1 || !number2){
        console.log("Please enter valid number")
        return
    }
    return number1+number2
}

console.log(addTwonumbers(3,5))

function loginUsername(name="anshu"){
    if (!name){
        console.log("Please enter username")
        return
    }
    console.log(`Hello ${name}`)
}

loginUsername('Dilasha')






