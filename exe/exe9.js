//////// Ex9 – Prime Numbers /////

const input = require('readline-sync');

var num = parseInt(input.questionInt("\nplease enter number: \n"));
if(num == 1){
    return console.log('1 isn`t a prime number\n');
}else if(num == 2){
    console.log(num);
}else{
    while(num > 2){
        isPrime(num);
        num--;
    }
    console.log(2);
}

function isPrime(num) {
    for (var i = 2; i < num; i++) {
        if(num%i == 0)return;
    }
    return console.log(num);
}

