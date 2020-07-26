var readlineSync = require('readline-sync');

let array = new Array();
const length = readlineSync.question("\nPlease enter the length of the array:  \n");
for(let i = 0; i < length ; i++){
    const num = Math.floor(Math.random() * (100 - 1) ) + 1;
    array.push(num);
}

let min = Math.min( ...array );
let max = Math.max( ...array );
let indexMin=array.indexOf(min);
let indexMax=array.indexOf(max);

console.log('\nindexMAX: '+indexMax);
console.log('indexMIN: '+indexMin+'\n');

for(var i in array){
    if(i%2==0){
        array[i] = indexMin;
    }else{
        array[i] = indexMax;
    }
    console.log(array[i]);
}


