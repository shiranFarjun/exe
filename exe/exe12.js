const input = require('readline-sync');

var sentence = input.question("\nPlease enter some sentence or number: \n");
vowels= /[a]|[e]|[i]|[o]|[u]|[y]/g;
let res = "";

for(var i = 0; i <sentence.length; i++){
  if(sentence[i].match(vowels)){
    res +=sentence[i].toUpperCase();
  } else {
    res += sentence[i];
  }
}

console.log(res);