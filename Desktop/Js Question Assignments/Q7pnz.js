var readlineSync = require('readline-sync');

const number= parseInt (readlineSync.question(' Enter a Number :'));

if(number>0){
  console.log('The Number is Positive number');
}else if(number==0){
  console.log('You entered the number Zero');
}else{(number<0)
    console.log(' This Number is Negative number');
}
