let name="hardik"
let repocount="43"
// console.log(name+repocount)

console.log(`Hello my name is ${name} and my repo count is ${repocount}`)
const gamename=new String("hardik--v")
console.log(gamename[0])
console.log(gamename.__proto__)
console.log(gamename.length)
console.log(gamename.toUpperCase())
console.log(gamename.charAt(2))
console.log(gamename.indexOf('r'))
 
const newString=gamename.substring(0,4)
console.log(newString)
const anotherString=gamename.slice(-8, 4)
console.log(anotherString)


const newstringone="    hardik   "
console.log(newstringone)
console.log(newstringone.trim())  //isse blank spaces nhi ayenge 
const url="https://hardik.com/hardik%20vijay"
 console.log(url.replace('%20','-'))
 console.log(url.includes('hardik')) //isse hm pta kr skte hai ki ye includes hai ya nhi?
console.log(gamename.split('-'))  //ise ye hoga ki 
