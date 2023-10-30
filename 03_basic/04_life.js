//(1)(2)  //  1--> first wala parenthesis is for function definition isme hm function ki definition likhenge  &&&  2--> second wala is used for execution 
// ()()  --> ye hmne arrow me sikha tha

(function chai(){
    //named IIFE
         console.log("DB CONNECTED")
    })();   // jo function immediately execute ho jaye , Global scope ke pollution se problem hoti hai kahi bar toh us global scope ke jo  variables hai ya jo bhi waha declaration hai us declaration ko hatane ke liye hmne IIFE ka use kiya


    (()=>{
        //unamed IIFE
        console.log(`DB CONNECTED TWO`)
    })();   //if we dont give semicolon here then it will give error


    ((name)=>{
        //how to pass parameter
        console.log(`DB CONNECTED TWO ${name}`)
    })("hardik");


    // and for wiriting two IIFE together we need to apply semi colon