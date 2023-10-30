//if()  loop ke bahar jo bhi likh rhe hai wo sab "global scope" hai


// var c=300

let a=100
if(true){
    let a=10       //the code that we written in if block is called block scope.
    const b=20   
    var c=30     //{ scope --> (in brackett ke andr walo ko scope ko khte hai) }     and if we dont write 'var' and we only write 'c' it will give output as 30.
   
    console.log("inner: ",a);  //upper wale (let a) se koi farak nhi pdega andr wale (a) ki value pe

}

///console.log(a) //it will give error  beacuse we will declare it in scope
//console.log(b)    ///it will give error  beacuse we will declare it in scope
console.log(c)      //it  will not give output  thats why we dont use var because it will output after declaring it in scope

console.log(a)


// important --> when we go in browser and check console and check scope the scope that browser show is differnevt then the scope (Node) show , so both the scope is differnet

function one(){
    const username="hardik"
    function two(){
        website:"youtube"
        console.log(username)
    }
    // console.log(website)    //it will give error because we cant access website function(two) ke bhar

    two()    //it means we called function two
}
one() // it means we called function one



if(true){
    const user="hardik"
    if(user==="hardik"){
        const web=" youtube"
        console.log(user + web)
    }
   // console.log(web)   //it will give error because we cant access website function(two) ke bhar
}
//console.log(user)         //it will give error because we cant access website function(two) ke bhar


//++++++++++++++++++ important +++++++++++++++++++++++++++++++//

console.log(onenum(3))  //here we can call onenum before declaring it and it is giving us output

function onenum(num){
    return num+1
}
onenum(3)
//console.log(onenum(3))


console.log(twonum(4))   //here we can call twonum before decaring it because here we not only declare it but also we hold it with a variable
const twonum=function(num){
    return num+1;
}
twonum(4)
// console.log(twonum(4))