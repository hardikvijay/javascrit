//for
for (let index = 0; index < 10; index++) {
    const element = index;
    console.log(element) 
}
// console.log(element)  //this element is not accessible bhar because isko hmne loop ke andr declare kra hai


for (let i = 0; i < 10; i++) {
    console.log(`outer loop: ${i}`)      //it will print countinng from 1 to 9
    for(j=0;j<10;j++){
        //console.log(`inner loop:${j} and outer loop :${i}`)
       // console.log( i + "*" + j + '=' + i*j);    //it will print table

    }
    let array=["flash","batmann","superman"];
    console.log(array.length)
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        console.log(element)
        
    }
    
}

for (let index = 1; index <= 20; index++) {
    if(index==5){
      console.log("detected 5")
    //   break;
    continue;
    }
    const element = index;
    // console.log(element);
    console.log(`value of i :${index}`)
    
}