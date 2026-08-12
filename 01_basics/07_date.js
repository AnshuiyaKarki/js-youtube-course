// Dates

// let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof(myDate))

let myCreatedDate= new Date(2023,0,15)//year,monthindex (0based),day
console.log(myCreatedDate.toDateString())
let myNewCreatedDate= new Date(2023,0,15,5,3,24)//year,monthindex (0based),day,hour,minutes,seconds
console.log(myNewCreatedDate.toString())


let myAnotherDate=new Date('2026-01-12')//manual entry then months are 1 based 
console.log(myAnotherDate.toLocaleString())


console.log(myCreatedDate.getDay())


let myTimeStamp=Date.now()
console.log(myTimeStamp) //returns the number of milliseconds that have passed since January 1, 1970, 00:00:00 UTC
//to get seconds divide by 1000 cause 1s=1000ms

console.log(myTimeStamp/1000 + " seconds")
console.log(Math.floor(myTimeStamp/1000 )+ " seconds")

let newDate= new Date('2023-03-15')
console.log(newDate)
console.log(newDate.getDay()+1)//day is 0 based indexing while getting it so  we do +1 to get exact day index of the week
console.log(newDate.toLocaleString('default',{
    weekday:'long'
}))
