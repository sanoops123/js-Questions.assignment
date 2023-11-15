var readlineSync = require('readline-sync');

const number= parseInt (readlineSync.question(' Enter your age :'));

if(number<=12){
      console.log('You are child');
}else if(number<=19){
      console.log('You are teenager ');
}else if (number<=59){
      console.log('You are Adult');
}else{
      console.log('You are a Senior person');
}