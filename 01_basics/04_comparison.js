console.log(2 > 1);
console.log(2 >= 1);
console.log(2 < 1);
console.log(2 == 1);
console.log(2 != 1);

//avoid applying comparison on different operator
// as behavior is unpredictable
console.log("2" > 1);
console.log("02" > 1);


//the reason for this is because equaltiy check
// and comparison < <= > >= works differently
// comparison converts null to 0 hence null>=0 works
console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);

//undefined with every comparison operator returns 0
console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);

// === strict check->checks data type and value

console.log("2" === 2);