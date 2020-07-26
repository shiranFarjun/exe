const input = require('readline-sync');
var numberToWords = require('number-to-words');

var number = input.question("Please Enter number: ");
    return(number>=0 && number<=9)?console.log(numberToWords.toWords(number)):console.log('This is not a valid number');



