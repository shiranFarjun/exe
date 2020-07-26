const input = require('readline-sync');


var x = parseInt(input.question("please enter number: \n"));
var y = parseInt(input.question("please enter one more number: \n"));
checkingSum(x, y);

function checkingSum(num1, num2){
   return (num1+num2 === 10)?console.log('makes 10'):console.log('nope');
}

