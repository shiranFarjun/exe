var readlineSync = require('readline-sync');


let array = new Array();
for(let i = 0; i <5 ;i++){
    const num = readlineSync.question("\nPlease enter num: \n");
    array.push(num);
}
console.log('\n-----Print array-----');

for(i in array){
    console.log('\n'+array[i]);
}