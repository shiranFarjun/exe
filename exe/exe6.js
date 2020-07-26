const input = require('readline-sync');

var num = input.question("please choose a number larger than 10:\n ");
while (num<=10){
    num = input.question("please choose a number LARGER than 10:\n ");
}
console.log('thank you');