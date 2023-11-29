const num=[1,2,3]
/*
const myTotal=num.reduce(function(acc,currval){
    console.log(`acc:${acc} and currvalue is ${currval}`)
    return acc + currval
},3)  // coma ke baad jo value denge wo acculmulator ki ho jayegi and currvalue array me se lega
*/

const myTotal=num.reduce((acc,currvalue)=> acc+currvalue,0)

console.log(myTotal)