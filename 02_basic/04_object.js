//const tinnderUser=new Object() //it is a singelton object
const tinderUser={};  //it is not a singelton object

tinderUser.id="123aasdd"
tinderUser.name="Hardik"
tinderUser.isLoggedIn="false"
const regularUser={
    email:"abc@gmail.com",
    fullname:{
         userfullname:{
            firstname:"hardik",
            lastname:"vijay"
         }
    }
}

const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}
//const obj3={obj1,obj2}

//const obj3=Object.assign({},obj1,obj2)
const obj3={...obj1,...obj2}  //we are using spread operator there

console.log(obj3)



console.log('\n')

console.log(regularUser.fullname.userfullname)
console.log('\n')
//console.log(tinnderUser)
console.log(tinderUser)



const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));  //its datatype is array
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'))


const course={
    coursename:"js",
    price:990,
    courseinstructor:"hitesh"
}
//course.courseinstructor

const {courseinstructor : instructor}=course;
// console.log(courseinstructor)
console.log(instructor)

// {
//     "name":"hardik",
//     "coursename":"js",     //it will give json and it is part of react and API
//     "price":0
// }