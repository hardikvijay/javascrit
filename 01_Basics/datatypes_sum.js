// const id = Symbol('123')
// const anotherId=Symbol('123')
// console.log(id===anotherId)


//*************************************************************/
//stack(primitive)   , heap(non-primitve)

let youtubename="hardik"
let anothername=youtubename
anothername="vijay"
console.log(youtubename)
console.log(anothername)

let userone = {
    email:"hardik@google.com",
    upi: "ser@ybl"
}
let usertwo= userone

usertwo.email="user@google.con"   //usertwo.email krke isliye likha because hm object ko dot ke sath call krte hai
console.log(userone)
console.log(usertwo)   
// heap ke andr reference same hi hota hai sabka isliye jb hmne usertwo ki email ko change kiya toh userone ka bhi change hogya   mtlb hm heap ke andr jo bhi change krte hai wo drect usi original value me hote hai

