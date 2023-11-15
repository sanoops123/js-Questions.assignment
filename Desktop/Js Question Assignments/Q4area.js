var readlineSync = require('readline-sync');

let a = parseInt (readlineSync.question(' Enter length of the rectangle:'));
let b = parseInt (readlineSync.question(' Enter Width of the rectangle:'));
let c=a*b;
console.log( 'Area of the rectangle is',  c);