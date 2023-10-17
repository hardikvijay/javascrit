const marvel=["iron","spider",]
const DC=["HUlk","batsman"]

/*
marvel.push(DC)
console.log(marvel)  //agar ham push krenge aur fir usko print krayenge toh wo usko pura as a array hi push krdega dusre array me
console.log(marvel[2][1])
*/

const allheros=marvel.concat(DC)
console.log(allheros)

const allnewheros=[...marvel,...DC]  //by using(...) we covert this array into spread operator 
console.log(allnewheros)

const another_array=[1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_another_array=another_array.flat(Infinity)
console.log(real_another_array)

console.log(Array.isArray("hitesh"))
console.log(Array.from("hitesh"))
console.log(Array.from({name:"hitesh"})) //interesting and important case  for interview

let score1=100
let score2=200
let score3=300
console.log(Array.of(score1,score2,score3))