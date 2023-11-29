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
//console.log(map);

 //for (const key of map)    //agr hm ye aese likhenge toh ye pura array me convert ho jayega aur sb sath me  aajayega
 for (const [key,value] of map) {
   // console.log(key, ":-" ,value)
 }

 const myObject ={
    game1:"NFS",
    game2:"cricket"
 }
 for (const key of myObject) {     //myObject is not iterable by (forof loop) so  we need different method, but maps is iterable, for object we have different methods to iterate
    console.log(key);
 }