//singleton          -----> jb bhi hum actually me literals ki trah declare krte hai toh singleton nhi bnta hai

//object literals
const mysym=Symbol("key 1")

const jsuser={
    name:"hardik",
    "full name":"hardik v",
    [mysym]:"mykey 1",   ///we use[] because for using mysym as symbol so we write a mysym in bracket [mysym] like this
    age:20,
    location:"jaipur",
    email:"hardik@google.com",
    isLoggedin:"false",
    lastLoggedIn:["monday","saturday"]
    

}
console.log(jsuser.email)
console.log(jsuser["email"])
console.log(jsuser["full name"])
// console.log(jsuser.mysym) 
console.log(jsuser[mysym])

console.log(typeof(jsuser.mysym))  //it will give output a string but we need a (symbol)

jsuser.email="hardik@microsoft.com"  //for changing the values
//Object.freeze(jsuser)   //isse value change nhi kr payenge
jsuser.email="hardik@amazon.com"  //agar freeze ke baad hm email change krne ki kosis krenge toh ye error toh nhi dega hmko but ye email change nhi krega

console.log(jsuser)

jsuser.greeting=function(){
    console.log("Hello js user")
}

jsuser.greetingTwo=function(){
    console.log(`Hello js user, ${this.name}`)
}

console.log(jsuser.greeting)  //this will give output -> undefined  and if we 
console.log(jsuser.greeting())  //this will give error  but if we dont freeze object then this will also give ,output-->undefined
console.log(jsuser.greetingTwo())