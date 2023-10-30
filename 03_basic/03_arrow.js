const user={
    username:"hardik",
    price:199,

    welcomeMessage:function(){
        console.log(`${this.username}, Welcome to website`)     //(this)  is  a current context or it refer current context
      console.log(this)
    }
}
//user.welcomeMessage //ye print nhi krega kuch bhi
 user.welcomeMessage()
// // username="sam"  //isse kuch bhi change nhi hoga
 user.username="sam"
 user.welcomeMessage()

console.log(this)  //this will give empty set


// function chai(){
//     let u="hardik"
//     //console.log(this) //it will give lot of values
//     console.log(this.u)  //now this will give (undefined)    because this context only work in (object) it will not work in (functions)
// }
// chai()


// const  chai=function(){
//    let u="a"
//     console.log(this.u)  //it will also give output (undefined)
// }
// chai()


const chai = () =>{    //this is a arrow function,in this we can write arrow in the place of function
    let us="hardik"
    //console.log(this.us)  //it will give output  as (undefined)
    console.log(this)  //this will give empty set
}
chai()


//basic syntax of arrow function is --->   () => {}  &&& now ab hm isko name deskte hai  [ const addtwo = () => {}  ]

// const addtwo = (nums1,nums2) => {
//        return nums1 + nums2
// }


// const addtwo = (nums1,nums2) =>  nums1 + nums2      //this is called  implicit return

// const addtwo = (nums1,nums2) =>  (nums1 + nums2)

// const addtwo = (nums1,nums2) =>  ({s:"hardik"})

const addtwo = (num1, num2) => ({username: "hardik"})
console.log(addtwo(3,4))