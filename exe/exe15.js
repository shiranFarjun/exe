var readlineSync = require('readline-sync');

let array = new Array();
const length = readlineSync.question("\nPlease enter the length of the array:  \n");
for(let i = 0; i < length ; i++){
    const num = Math.floor(Math.random() * (50 - 1) ) + 1;
    array.push(num);
}

let min = Math.min( ...array );
let max = Math.max( ...array );

console.log('\nMAX: '+max);
console.log('MIN: '+min+'\n');

