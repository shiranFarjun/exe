const input = require('readline-sync');

var sentence = input.question("\nPlease enter some sentence: \n");
console.log('\n'+sentence.replace(/\s+/g,'*')+'\n');        //\s+ matches any whitespace character (equal to [\r\n\t\f\v ]), g modifier: global. All matches (don't return after first match)