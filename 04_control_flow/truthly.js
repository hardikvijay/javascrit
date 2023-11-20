// const useremail="hardik@gmail"
const useremail=[] //isme bhi ye output yehi dega ki useremail found jbki ye empty hai
// if(useremail){
//     console.log("email found")
// }
// else{
//     console.log("email not found")
// }




//falsy values =>  false , 0,-0,BigInt on,"",null,undefined,NaN

//truthly values => "0",'false', "",[],{},function(){}


if(useremail.length===0){    // this will be used to check ([] --> ki ye khali toh nhi) 
    console.log("Array is empty")
}


// for objects

const emptyobj={}
if(Object.keys(emptyobj).length ===0 ){
    console.log("object is empty");
}

//nullish coalescing operator (??): null undefined

let val1;
// val1=5??10;   //output is 5
// val1=null??10   //output is 10
// val1=undefined??20  //output is 20

val1=null??10??20  //output is 10

console.log(val1)


//ternary operator

// condition?true:false 
const iceteaprice=100

iceteaprice<=80 ? console.log("less than 80") : console.log("greater than 80")