var input = require('readline-sync');

var N = parseInt(input.question("please enter positive number: \n"));
var result = 1;
Nfactorial(N);
console.log(N+'!='+result+'\n');

function Nfactorial(x){
    if (x>=0){
        console.log('\n'+ x+'! = ');
        while (x!=0){
            result=result*x;
            x--;
            if (x!=0)console.log('*'+ x);
        }
        console.log(result);

    }else {
        console.log('The number you entered is not positive');
        process.exit();
    }
}