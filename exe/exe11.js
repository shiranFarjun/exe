const input = require('readline-sync');

var sentence = input.question("\nPlease enter some sentence or number: \n");
console.log(isPalindrome(sentence));

function isPalindrome(sentence){
    for(var i=0;i<sentence.length;i++){
        return sentence == sentence.split('').reverse().join('');  //that exmple for split('') :[ '1', '2', '3', '2', '1' ]
    }
} 