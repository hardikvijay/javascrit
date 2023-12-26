# projects related to DOM

## project Link
[click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

#  solution code

## project 1

```javascript
console.log("hardik")
```



## project 2

```javascript
const form= document.querySelector('form');
//this usecase will give you empty value
//const height=parseInt(document.querySelector('#height').value)
form.addEventListener('submit', function(e) {
  e.preventDefault();

  const height=parseInt(document.querySelector('#height').value);
  const weight=parseInt(document.querySelector('#weight').value);
  const results=document.querySelector('#results');

if (height === ''||height < 0||isNaN(height)) {
  //results.innerHTML = 'please give a valid height';
  results.innerHTML = `please give a valid height ${height}`;
  
}
//results.innerHTML=`${height}`

else if (weight === ''||weight < 0||isNaN(weight)) {
  //results.innerHTML = 'please give a valid height';
  results.innerHTML = `please give a valid weight ${weight}`;
  
}
else{
  const bmi=(weight/((height*height)/10000)).toFixed(2);
  //show the result
  results.innerHTML= `<span>${bmi}</span>`
  
  //we need to print that is that (under weight,Normal weight,Greater than...)   mujhe nhi aaya print krna
}

});
```
## project 3
```javascript
const time = document.getElementById('clock');
// const time=document.querySelector('#clock')

setInterval(function () {
  const date = new Date();
 // console.log(date.toLocaleTimeString());
 clock.innerHTML=date.toLocaleTimeString();
}, 1000); 
  
   //ye 1000 mili second me hai
  


```
## 2 aysnc project
## project 4 (unlimited colors)

```javascript
//generate a random color
const randomcolor= function(){
  const hex='0123456789ABCDEF'
  let color='#';
  for(let i=0;i<6;i++){
  color+=hex[Math.floor(Math.random()*16)];
  }
  return color;
};
let intervalId
const startchangingcolor=function(){
  if(!intervalId){
  intervalId=setInterval(changeColor,1000)
  }
  // document.body.style.backgroundColor=randomcolor();


  function changeColor(){
    document.body.style.backgroundColor=randomcolor();
  }
}
const stopchangingcolor=function(){
  clearInterval(intervalId);
  intervalId=null;    //this is edge case 
}

document.querySelector('#start').addEventListener('click',startchangingcolor);
document.querySelector('#stop').addEventListener('click',stopchangingcolor);

```