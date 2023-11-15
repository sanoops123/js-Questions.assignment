var readlineSync = require('readline-sync');

let a = parseInt (readlineSync.question(' Enter your Age  :'));
let age=18;
if(a>=18){
  console.log('You are eligible to vote');
}else{
  console.log('You are not eligible to vote');
}
