

const promiseOne = new Promise(function(resolve, reject){
    //Do an async task
    // DB calls, cryptography, network
    setTimeout(function(){
        console.log('Async task is compelete');
        resolve()    // 'resolve()'  ka use krne ye ab connect hua hai 'then()' se.
    }, 1000)
})

promiseOne.then(function(){
    console.log("Promise consumed");  // promise consumed kabhi bhi phele nhi ayega because phele task complete hoga ande jese hi uske baad 'resolve()' kiya tb ayega ' promise consumed'.
})

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('async task 2')
        resolve()
    },1000)
}).then(function(){
    console.log("async 2 resolved")})


    const promiseThree=new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve({username: "chai",email:"chai@example.com"})
        },1000)
    })

    promiseThree.then(function(user){
             console.log(user)
    })

    const promisefour= new Promise(function(resolve,reject){
        setTimeout(function(){
            let error=true;
            if(!error){
                resolve({username:'hardik', password:'123'})
            }
            else{
                reject('ERROR : something went wrong')
            }
        },1000)
    })

    promisefour.then((user)=>{
        console.log(user)
        return user.username
    }).then((username)=>{
        console.log(username)
    }).catch(function(error){
        console.log(error)
    }).finally(()=>{
        console.log("the promise is either resolved or either rejected");
    })

    const promisefive=new Promise(function(resolve,reject){
        setTimeout(function(){
            let error=true;
            if(!error){
                resolve({username:'javascript', password:'123'})
            }
            else{
                reject('ERROR : JS went wrong')
            }
        },1000)
    })

    async function consumepromisefive(){
        // const response =  await promisefive
        // console.log(response);

        try {
            const response =  await promisefive
            console.log(response);

        } catch (error) {
            console.log(error)
        }
    } 
    
   consumepromisefive()     //6:09:00    check why this call here






   /*



   async function getalluser(){


    // const response = await fetch('https://jsonplaceholder.typicode.com/users')
    // const data = response.json() //incoming data ko json me convert krdiya isliye (.json) likha hai
    // console.log(data)



    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
       
       // console.log(response)    //ye toh isliye likha hai taki ye bta ske ki code hmara sahi hai bus kuch chizee time leti hai
    
    
        const data = await response.json() //incoming data ko json me convert krdiya isliye (.json) likha hai    // yha pe (await) isi liye lagaya hai because kuch code time lete hai
    console.log(data)
    
        
    } catch (error) {
        console.log('E:',error)
        
    }
   }
   getalluser()



   */


                              //OR


 
fetch('https://jsonplaceholder.typicode.com/users')  
.then((response)=>{
    return response.json()
}).then((data)=>{
     console.log(data)
})
.catch((error)=>console.log(error))      //fetch phele load ho jayega baki kam baad me honge (run krke) dekh lo fetch wala task sbse top pe ayega baki jo upper likha hua hai wo baad me ayega fetch ke
                     


/*    
 fetch--->


agr error 404 de rha hai toh wo (response ) me ayega because wo kuch toh de rha hai   Error wo tab bhi hoga jb wo request kr hi nhi paya hai.



A fetch() promise only rejects when a network error is encountered (which is usually when there's a permissions 
issue or similar). A fetch() promise does not reject on HTTP errors (404, etc.). Instead, a then() handler must check 
the Response.ok and/or Response.status properties.  
*/