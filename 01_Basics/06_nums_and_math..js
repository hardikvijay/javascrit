const score=4400;
console.log(score)

const sub=new Number(100);  //isko jage chrome me inspect me jake console ke andr print kro and usme likho const score=22;   console.log(score) likhke dekho and check NUMBER and do smane for STRING' 
console.log(sub);
console.log(sub.toString()); //.toStrig()  converted sub to string
console.log(sub.toString().length); 
console.log(sub.toFixed(2));  //this is used for digit after decimal for example (100.00)

const othern=23.8976;
console.log(othern.toPrecision(3));

const otherno=123.8976;
console.log(otherno.toPrecision(3));

const othernoo=1123.8976;
console.log(othernoo.toPrecision(3));

const hun=100000;
console.log(hun.toLocaleString());  //this is acccording to usa number system ( isme coma lgte hai usa ke number system ke according )
console.log(hun.toLocaleString('en-IN'));  // isme coma lgte hai india ke number system ke according

//------------------MATHS---------------------------//
console.log(Math)
console.log(Math.abs(-4))
console.log(Math.round(4.6))
console.log(Math.ceil(2.3))
console.log(Math.floor(4.9))
console.log(Math.min(4,6,8,2))

console.log(Math.random())  //random fuction apne aap koi bhi value le leta hai 0 se 1 ke beej me
console.log(Math.floor(Math.random()*10)+1);

const min=10;
const max=20;
console.log(Math.floor(Math.random()*(max-min+1)-1)+min)