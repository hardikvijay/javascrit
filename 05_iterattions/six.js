const coding=["js","java","cpp","ruby"]
const values= coding.forEach((item)=>{
    console.log(item)
    return item //it we dont return it then iit will give undefined
    //now isko return krne ke baad bhi ye output toh undefined de rha hai isse ye pta lgta haii ki jo (forEach) hai koi output return nhi krta hai
})
console.log(values)

const mynums=['1','2','3','4','5','6','7','8','9','10'];
/*const nums=mynums.filter((num)=> num>4) */     //this will give correct output
/*const nums=mynums.filter((num)=> {num>4})  */    //this will give output empty  because when we started scope(curly bracket laga denge toh scope start ho jayega) toh hme usse "return krna pdega"

const nums=mynums.filter((num)=> {
    return num>4})  // now we return it then it will give not give empty array as output
console.log(nums)


const newnums=[]
newnums.forEach((num)=>{
    if (num>4) {
        newnums.push(num)
    }
}
)
console.log(newnums)