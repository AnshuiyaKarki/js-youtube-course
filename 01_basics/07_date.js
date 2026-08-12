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
