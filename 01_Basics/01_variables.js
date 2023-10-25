const accountId=2344
let accountemail="hardik@gmail.com"
var account_password="abc"
accountcity="jaipur"

accountemail="has@ga"
account_password="12345"
accountcity="bengaluru"
let accountstate;


// account_id="2"  // we can not change it because we already declare it constant
console.log(accountId)

/*
prefer not to use var
because of issue in block scope and functional scope
*/
console.table([accountId,accountemail,account_password,accountcity,accountstate])