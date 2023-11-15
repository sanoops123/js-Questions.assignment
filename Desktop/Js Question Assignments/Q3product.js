var readlineSync = require('readline-sync');

let product1= parseInt (readlineSync.question(' Enter your product no:'));
let product2= parseInt (readlineSync.question(' Enter your next product no:'));
let x=product1*product2
console.log( x);