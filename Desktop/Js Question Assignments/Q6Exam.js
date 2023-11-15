var readlineSync = require('readline-sync');

let a = parseInt (readlineSync.question(' Enter your Mark  :'));
let Mark=60;
if(a>=60){
  console.log(' Congratulations..You are passed');
}else{
  console.log('Sorry.. Your result is failed');
}
