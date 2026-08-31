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