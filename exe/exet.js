var figlet = require('figlet');
var readlineSync = require('readline-sync');


let arrWord=['Banana','computer','Course','Studies','Family','attractions','radio','kitchen','Clothing','mall','cookies','Wedding','Image','Children','Games','Jerusalem','Car'];
let encriptWord = '';
let guesses = 10;
let foundChar=0;
let myPromise = new Promise(function(resolve, reject) {
    figlet ('Welcome\n to\n HANGMAN!!\n', {
        font: 'Dancing Font',
        horizontalLayout: 'default',
        verticalLayout: 'default',
        width: 10,
    })?resolve('success'): reject('failure');
});
myPromise.then(function(msg){
    console.log(msg,'The promise was resolved');
    return true;
},function(err){
    console.log(msg,'The promise was resolved');
    return false;
}).then(function(val){
    console.log(val);
},function(err){
    console.log(err);
});

let word =  makeWord(arrWord);
console.log('The word is: '+word+'\n');
for(let i=0; i<word.length; i++){
    encriptWord+='*';
}
game(encriptWord);

// figlet ('Welcome\n to\n HANGMAN!!\n', {
//     font: 'Dancing Font',
//     horizontalLayout: 'default',
//     verticalLayout: 'default',
//     width: 10,}, 
//     function (err, data) {
//     if (err) {
//         console.log('Something went wrong...');
//         console.dir(err);
//         return;
//     }
//     (console.log(data));
// });

function makeWord(arr) {
    const numindex = Math.floor(Math.random() * (arr.length - 0) ) + 0;
    return arr[numindex];
}

function game(encriptWord){
    if(guesses===0){
        return console.log('\nNo more guessing options!!')
    }
    console.log('\n\nYou have '+guesses+' guesses');
    console.log('The word is: ');
    console.log(encriptWord);
    const input = readlineSync.question("What is your guesses?  \n");
    if(input.length>1){
        console.log('Please enter only one character');
    }else if (input.match(/[\W|_|0-9]/g)){
        console.log('\nThe input is invalid.')
        game(encriptWord);
    }else if(!word.includes(input)){       // when the result is fulse
        guesses-=1;
        game(encriptWord);
    }else{
        if(input.match(/[A-Z]/)){    
            foundChar+=1;
            encriptWord = encriptWord.substring(0,0) + input + encriptWord.substring(0+1);
        }else{
            for(let i=0;i<word.length;i++){   
                if(word[i]==input){
                    foundChar+=1;
                    encriptWord = encriptWord.substring(0, i) + input + encriptWord.substring(i+1);
                }
            }
        }
    }

    if(foundChar>=word.length){
        console.log(encriptWord);
        return console.log('\nWow you are good!!! ');
    }
    game(encriptWord);
}


     




















