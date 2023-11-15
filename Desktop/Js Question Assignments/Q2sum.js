var readlineSync = require('readline-sync');

let a = parseInt (readlineSync.question(' Enter a number:'));
let b = parseInt (readlineSync.question(' Enter a next no:'));
let c=a+b;
console.log( 'sum =',  c);