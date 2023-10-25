function SayMyName(){
    console.log("H");
    console.log("A");
    console.log("R")
    console.log("D")
    console.log("I")
    console.log("K")
}
// SayMyName
 //SayMyName()

function addtwonumbe(number1,number2){
    console.log(number1+number2)
}
addtwonumbe(3,4)
addtwonumbe(3,"4")
addtwonumbe(3,"a")
//const result=addtwonumber(3,5)
// console.log("Result :", result)


function addtwonumber(number1,number2){
    let result=(number1+number2)
    return result
}

const result=addtwonumber(1,3)
console.log("Result :", result)

function loginUserMessage(username = "vijay"){     //username ki hmne yaha pe value dedi hai ab agr hm username me koi bhi value nhi denge tb ye vijay value le lega   isse ye hoga ki jo hmne (if) wali statement likhi hai wo kbhi nhi chlega
    //if(username === undefined){     or
    if(!username){
        console.log("please enter a username")
        return  // agr hmne yha pe return kra diya toh ye niche wala kuch bhi execute nhi hoga 
    }
    return `${username} just logged in`
}
loginUserMessage("hardik")  // this will not give us output because we did not tell this program to print it
//console.log(loginUserMessage("hardik"))   // in this program we tell the program to print it so it print it

console.log(loginUserMessage())  //if we dont write any comment in the bracket it will give output --> undefined    and for taking output as undefined first we need to delete (username = "vijay") then it will give undefined as output

/************************************  Function and Object  (this will use in cart section of app)*******************/

function calcultaeCartprice(val1,val2,...num1){    //(... this  is rest operator and spread operator here in this code we are using this 3 dot as a rest operator)
  return num1;
}
console.log(calcultaeCartprice(200,300,400,3000));


const user={
    username:"hardik",
    price:199
}
function handleobject(anyobject){
    console.log(`username is ${anyobject.username} and the price is ${anyobject.price}`);
}
// handleobject(user)     //for  using this we need to use above code

handleobject({
    username:"sam",    //this is the direct way of giving name and price
    price:309
})

const newArray=[200,300,400,500]

function returnSecondValue(getArray){
    return getArray[2]
}
// console.log(returnSecondValue(newArray))   or
console.log(returnSecondValue([200,300,400,500]));