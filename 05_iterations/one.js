// for loop

for (let i=0;i<10;i++){
    element=i;
    if (element==5){
        console.log('5 is the best number')
    }
    console.log(element);
}
 //nested for loop 
for (let i=1;i<=10;i++){
    console.log("table of " + i)
   for (let j=1;j<=10;j++){
    console.log(`${i}*${j} == ` + i*j)
   }
}

let myArray=["scarlet witch","superman","batman"];

for(let i=0;i<myArray.length;i++){
    console.log(myArray[i])
}

//break and continue 
for (i=1;i<=20;i++){
   
    if (i==5){
        console.log("5 detected")
        break
    }
     console.log(`Value of i is ${i}`)
}



console.log('continue')
for (i=1;i<=10;i++){
    if (i==5){
        console.log("5 detected")
        continue
    }
 
    console.log(`Value of i is ${i}`)
}





