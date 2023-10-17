const myArr=[1,2,3,4,5]
const myarr2=new Array(1,4,7,8)
console.log(myArr[1])
console.log(myarr2)
console.log('\n')
/*
myArr.push(23)
myArr.pop() //isme bracket ke andr kuch nhi dena hota hai ye automatically pop krlega last element ko
console.log(myArr)

*/
// myArr.unshift(9)
// myArr.shift()


/*
 console.log(myArr.includes(9))
 console.log(myArr.indexOf(9))
 console.log(myArr)

 const newarr=myArr.join();  //.join()  se ye hota hai ki ye array ko string ki form me convert kr deta hai
 console.log(newarr)
 console.log(myArr)
 console.log(typeof(newarr))

*/


 //slice and splice
 console.log("A",myArr)
 const myn1=myArr.slice(1,3)

 console.log(myn1)
 console.log("B",myArr)

 console.log('\n')

 const myn2=myArr.splice(1,3);
 console.log(myn1)
 console.log("C",myArr); //isme array change hojata hai isme ye hota hai ki slice ke andr se splice wala portion pura nikal jata hai
 console.log(myn2);