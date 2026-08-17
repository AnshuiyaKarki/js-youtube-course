 const marvel_heros=['wanda','thor','loki']
 const dc_heros=['spiderman','superman','batman']
//  console.log('push')
//  marvel_heros.push(dc_heros)
//  console.log(marvel_heros)//pushes array inside array 

 //to avoid this we can use concat func
 console.log('concat func')
 all_heros=marvel_heros.concat(dc_heros)
 console.log(all_heros)

 //another way to do this is by using spread operator

 all_new_heros=[...marvel_heros,...dc_heros]
 console.log(all_new_heros)

 //sometimes there is array inside array inside array to flaten it we use flat func ->we add depth as parameter
 const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
 const real_another_array=another_array.flat(Infinity)
 console.log(real_another_array)

 console.log(Array.isArray("Anshuiya"))
console.log(Array.from("Anshuiya"))
console.log(Array.from({name: "hitesh"})) // interesting returns empty it is just a normal object what needs to be in the array needs to be specified
let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));

// of() puts your arguments INTO an array.
// from() takes elements OUT OF something and puts them into an array.