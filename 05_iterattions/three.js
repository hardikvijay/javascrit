//for of

// ["","",""]

//[{},{},{}]

const arr=[1,2,3,4,5]
for(const num of arr){
    console.log(num)
}
const greeting="hello world !"
for (const greet of greeting) {
    console.log(`Each chara is ${greet}`)
    
}


//maps
const map=new Map()   //map is known for unique values and for same order
map.set("IN","india")
map.set("fr","france")
map.set("IN","india")
console.log(map)