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



//passing objects in functions
const cart={
    name:"red light mask",
    price:"399"
}

function handleObject(anyobject){
    console.log(`cart item is ${anyobject.name} and price is ${anyobject.price}`)
}

handleObject(cart)

handleObject({
    name:"vitamin c serum",
    price:"200"
})

//passing arrays in function
const myNewArray=[10,20,30]
function returnSecondValue(anyArray){
    console.log(anyArray[1]) 
}

returnSecondValue(myNewArray)
returnSecondValue([200,300,400,600])

//Rest operator ... = collects multiple values into one array.
function cartElements(...num1){
    console.log(...num1)

}

cartElements([500,3000,200,120])















