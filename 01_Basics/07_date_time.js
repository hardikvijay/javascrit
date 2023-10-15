let mydate=new Date();
console.log(mydate)
console.log(mydate.toDateString())
console.log(mydate.toISOString())
console.log(mydate.toJSON())
console.log(mydate.toString())
console.log(mydate.toTimeString())
console.log(mydate.toUTCString())
console.log(typeof mydate)



let myd=new Date(2023,0,23)  //in javascript months is started from 0 number
console.log(myd)

let myTimestamp= Date.now()  //it is used when we create quiz and polls for choosing winner
console.log(myTimestamp)  //it gives milli second value

console.log(myd.getTime())  // it is use like this when we made some project like hotel website so by this we can check which client book hotel room first
console.log(Date.now())
console.log(Date.now()/1000) //we divide it with 1000 beause we need to covert milli second into second
console.log(Math.floor(Date.now()/1000)) //we use floor function because as we divide it with 1000 it give value in points


myd.toLocaleDateString('default',{ weekdays:"long",})