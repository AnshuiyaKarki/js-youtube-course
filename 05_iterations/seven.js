const myNums=[1,2,3]

// reduce() is used to reduce an array to a single value,
// such as a total, sum, product, or accumulated result.
// reduce() takes two main arguments:
 // 1. callback function — receives accumulator and current value
 // 2. initialValue — the starting value of the accumulator

const myTotal=myNums.reduce((acc,curVal)=>{
    console.log(`Accumulator: ${acc} and current value is ${curVal}`)
    return acc+curVal;
},0)
console.log(myTotal)


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay=shoppingCart.reduce((acc,item)=> acc+item.price,0)
console.log(priceToPay)







