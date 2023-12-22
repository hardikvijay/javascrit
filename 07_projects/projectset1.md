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

## project 4
