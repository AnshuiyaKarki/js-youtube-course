const myNum=[1,2,3,4,5,6,7,8,9,10]

const val1= myNum.map((item)=>item+10)
console.log(val1)

// .map() is used to transform every element in an array and returns a new array.

const val2=myNum.map((item)=>item+10)
console.log(val2)

//what if i want smth greater than 5 only then add 10
const val3=myNum.map((item)=>{
    if (item>5){
        return item+10
    }
    return item
})
console.log(val3) // map processes the entire array but only items greater than 5 are transformed 


//chaining using multiple functions at once 
const val4=myNum
                .filter((item)=> item>5)
                .map((item)=>item+10)
                .map((item)=>item*1)

console.log(val4)



