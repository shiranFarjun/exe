var readlineSync = require('readline-sync');

options=['1.Play another round','2.Leave with my money :-)'];

let amountUser=50, bet=0;

console.log('\n',' ////////////-----------  Hello! Welcome To WAR  ----------\\\\\\\\\\\\\\\\\\\\\\\\');
const name = readlineSync.question("\nPlease enter your name: \n");
console.log('\nHello '+name+' You currently have '+amountUser+' dollers');
checkBet();


function checkBet(){
    bet = readlineSync.question('please your bet for the next round: 1 to 50 \n');
    if(!(bet>0 && bet<=50)){
        return console.log('I said between 1 to 50 And you typed '+bet+'!!\nI don\`t play with liars!!!Bye\n');
    }else if(bet>amountUser){
        console.log('Your bet is greater than the amount you have');
        bet = readlineSync.question('\nPlace enter again your bet for the next round: 1 to 50 \n');
        return checkBet();
    }else{
        return playWAR();
    }
}

function playWAR(){
    let playerOneNum = getRndomNum(1, 12)
    let playerTwoNum = getRndomNum(1, 12)
    console.log('\nYou card is '+playerOneNum+' And my card is '+ playerTwoNum);
    while(!(playerOneNum<playerTwoNum)){
        amountUser+= parseInt(bet);
        console.log('You Won '+bet+'!! And now you have '+ parseInt(amountUser));
        return askUser();
    }
    amountUser-= parseInt(bet);
    console.log('you lost '+bet+' And now you have '+parseInt(amountUser));
    if(amountUser<=0){
       return console.log('You are broke...Bye Bye\n');
    }
    return askUser();
}

function askUser(){
    ans = readlineSync.keyInSelect(options, 'What wold you like to do? ' );
    if(parseInt(ans)==0){
        return checkBet();
    }else{
        return console.log('You chose to stop playing and go with your money, goodbye! :-)')
    }

}

function getRndomNum(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}