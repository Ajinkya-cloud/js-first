const accountId = 123456
let accountEmail = "ajinkya@gmail.com"
var accountPassword = "12345"
accountCity = "pune"


// accountId = 2 //not allowed

accountEmail = "ajju@gmail.com"
accountPassword = "22232323"
accontCity = "hyderabad"
let accountState;

console.log(accountId);


/* 
prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountEmail, accountPassword, accountCity, accountState])