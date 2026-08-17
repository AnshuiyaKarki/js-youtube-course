//array(Non primitive data type)

const myArr=[0,1,2,3,4,5]
const myHeros=['Scarlet Witch', 'Thor']
console.log(myArr)

//another way of creating an array 
const newArr= new Array(1,2,3,4,5)
console.log(newArr)

//accessing array elements 
console.log(myArr[1])


//Array Methods
newArr.push(7)
console.log(newArr) //original array value change 

newArr.pop()
console.log(newArr)

myArr.unshift(10)// adds elements to the front
console.log(myArr) 

myArr.shift()//removes elements from the front
console.log(myArr)

console.log(myArr.includes(9))
console.log(myArr.indexOf(7))

const newAr=myArr.join()//adds all elements of an array to string seperated by comma
console.log(newAr)
console.log(typeof newAr)



//slice, splice 

console.log('A', myArr)

console.log('slice')

const myn1=myArr.slice(1,3)
console.log(myn1)
console.log('B',myArr)//Creates a new array without changing the original.

console.log('splice')

const myn2=myArr.splice(1,3)//Changes the original array by removing, adding, or replacing elements.
console.log(myn2)
console.log('B',myArr)







