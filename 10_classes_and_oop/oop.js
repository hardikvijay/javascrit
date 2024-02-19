const user={

    username:'hardik',
    loginCount: 8,
    signedIn:true,

    getUserdetail:function(){
        // console.log("Got user detail from database");
        // console.log(`username:${username}`)     //it will give error
        // console.log(`username:${this.username}`);                //it is the proper way

        console.log(this)    

    }
}


console.log(this);    //it will give empty   ,it is a global context the value might changed
// console.log(user)
console.log(user.username)
console.log(user.getUserdetail)
console.log(user.getUserdetail())  //it will give undefined



















//EXXTRA KNOWLEDGE-->
// Arrow function ke andr hme ".this" ka access nhi hota