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