//for each
//forEach() is an array method used to execute a function once for every element.


const coding=['js','ruby','java','python','cpp']
//way to print using callback function->function w no name
coding.forEach(function (item){ console.log(item)})
//another way to print using arrow callback func
coding.forEach( (item)=>{ console.log(item)})

function printMe(item){
    console.log(item)
}
//another way to print using custom function
coding.forEach(printMe)

coding.forEach((item,index,arr)=>{
    console.log(item,index,arr)
})


const myCoding=[
    {
        language:"javascript",
        languageFileName:"js"
    },
    {
        language:"java",
        languageFileName:"java"
    },
    {
        language:"python",
        languageFileName:"py"
    }
]




myCoding.forEach((item)=>{
    console.log(item.language)
})




// for...of → loop over values
// for...in → loop over keys
// forEach() → run a function for each array element



const val1=coding.forEach((item)=>{
    // console.log(item)
    return item // forEach() does not return the values returned by the callback function
    })

console.log(val1) // undefined


// How to return/filter values using a condition?
// Use filter() when you want a new array containing matching elements.

const myNums=[1,2,3,4,5,6,7,8]

// Without curly braces -> implicit return
const val2=myNums.filter((item)=>(item>4))
console.log(val2)


// Another way using curly braces -> explicit return
const val3=myNums.filter((item)=>{
    if(item>5){
        return item
    }
})

console.log(val3)


// Can we do this using forEach()?
// Yes. But we need to create another array and manually push
// the elements that satisfy the condition.

const myNewNums=[]

myNums.forEach((item)=>{
    if (item>6){
        myNewNums.push(item)
    }
})

console.log(myNewNums)


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
];


// genre = History
let userbooks=books.filter((book)=> book.genre==='History')
console.log(userbooks)


// published after 2000
userbooks=books.filter((book)=> {
    return book.publish>=2000
})
console.log(userbooks)


// published after 2000 AND genre = Science
userbooks=books.filter((book)=> {
    return (book.publish>=2000 && book.genre==='Science')
})
console.log(userbooks)