const input = require('readline-sync');

const sentence = input.question("\nPlease enter some sentence \n");
const wordS=sentence.split(" ");
for(var val of wordS){
    if(val.match(/\W|_/g)){
        delete wordS[wordS.indexOf(val)];
        wordS.length--;
    }
}
var map=new Map();
for(let val of wordS){
    map.set(val,val.length);
}
longestWord=Math.max(...map.values());
console.log("\nThe longest word is:  "+getByValue(map,longestWord)+"\n"); 

function getByValue(map, searchValue) {
    for (let [key, value] of map.entries()) {
      if (value === searchValue)
        return key;
    }
}
