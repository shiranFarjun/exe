var readlineSync = require('readline-sync');

console.log('\n ###########################','\n','Hello! Welcome to the quiz!\nWhich Blue Disney Character Are You?','\n','############################','\n','\nFirst qqestion\n','----------------------\n');

let totalSum=0;
answer1=['Coffee','Chocolate' , 'Pizza' , 'Cinnamon rolls'];
answer2=['Frozen yogurt','Milkshake' , 'Ice cream sandwich' , 'Ice cream sundae'];
answer3=['Smiley face fries','Sweet potato fries ' , 'Potato wedges' , 'Skinny fries'];
answer4=['Breakfast','Brunch ' , 'Dinners' , 'Dessert'];
answer5=['Red','Yellwo ' , 'Green' , 'Orange'];

index1 = readlineSync.keyInSelect(answer1, 'Choose a smell: ' );
index2 = readlineSync.keyInSelect(answer2, 'Choose some ice cream: ' );
index3 = readlineSync.keyInSelect(answer3, 'Choose a type of French fries: ' );
index4 = readlineSync.keyInSelect(answer4, 'Choose a meal: ' );
index5 = readlineSync.keyInSelect(answer5, 'Choose a color of the rainbow other than blue: ' );
totalSum+=index1+index2+index3+index4+index5;
sumIndex(parseInt( totalSum));


function sumIndex(total){
    console.log('\n\n~~~~~~~~~~~~ Quiz result ~~~~~~~~~~~' );
   
    if(total>=0 && total<5){
        console.log('\nDory\nLike Dory, you\'re incredibly caring. You want the best for everyone around you — so much so that you can even forget about your own well being. You\'re very positive and people love being around you because of it.\n');
    }else if(total>=5 && total<10){
        console.log('\nGenie\nLike Genie, you\'re incredibly outgoing and a born showperson. Your energy is too big to be tamed. You are bold and you speak your mind, no matter what. You also grant wishes, which is nice.\n');
    }else if(total>=10 && total<15){
        console.log('\nEeyore\nLike Eeyore, you have an introverted personality. You like to keep to yourself as much as possible and complain about everything. Just kidding, but you take things very slow.\n');
    }else{
        console.log('\nStitch\nEeyore Like Eeyore, you have an introverted personality. You like to keep to yourself as much as possible and complain about everything. Just kidding, but you take things very slow.\n');
    }

}