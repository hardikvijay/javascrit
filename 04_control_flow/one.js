const temperature=41
const isLoggedin="true"
// if(true){
//     console.log("executed")
// }

/*if(2==="2"){
    console.log("executed")  //it will not executed because by(===) we also check its type but in(==) we only check is it is equal?
} */

/*
const score=200
if(score>100){
    const power="fly"
    console.log(`user power :${power}`)
}
console.log(`user power :${power}`)  //agr hm isse bhar likhenge toh ye error dega becuase hm isse bhar decaare hi kr skte lekin agr hmne (power ko const ki jagah var likha hota toh ye bhar bhi run ho jata) isliye hm var ko deckare nhi krte
*/

const googleLoggedin="true";
const emailLoggedin="true";
if(googleLoggedin  && emailLoggedin && 2==3){
    console.log("you can buy course");
}

if(googleLoggedin || emailLoggedin || guestUser){
    console.log("user logged in")
}