var readlineSync = require('readline-sync');

Meal=['dairy meal ' , 'meaty '];

BDZMilk=['BDZ', 'Shiran' ,'alma lounge', 'loraenz&mintz', 'Caffe grag' , 'cafe-cafe'];
milkyKashrutR=['alma lounge', 'loraenz&mintz', 'Caffe grag' , 'cafe-cafe'];
milkyNotonlyKashrutR=['Max Brenner' ,'Cassis' , 'Cafe Fairo' ,'alma lounge', 'loraenz&mintz', 'Caffe grag' , 'cafe-cafe'];
BDZflesh=[' mexicani', 'BBB' ,'Armando' , 'EVE' , 'New Deli' , 'EWA SAFI'];
fleshyKashrutR=['Armando' , 'EVE' , 'New Deli' , 'EWA SAFI'];
fleshyNotOnlyKashrutR=['NG' , 'MATTEO' , 'Robi' , 'shira ','Armando' , 'EVE' , 'New Deli' , 'EWA SAFI']

//var numFriend = readlineSync.question('How many people are you going with? ');

if (readlineSync.keyInYN(' Should it be Kosher?')) {
    // 'Y' key was pressed.
    if(readlineSync.keyInYN('should it be Kashrut Lemehadrin? ')){
        chooseKindMeal(Meal , BDZMilk ,BDZflesh); 
    } else{
        chooseKindMeal(Meal , milkyKashrutR ,fleshyKashrutR);
    }
}else {
    // Another key was pressed, not have to be kosher.
    chooseKindMeal(Meal, milkyNotonlyKashrutR, fleshyNotOnlyKashrutR)
};





function chooseKindMeal(kind, milkR, fleshR){
    indexMeal = readlineSync.keyInSelect(kind, 'What meal do you want to eat ');
    console.log(indexMeal);
    if (indexMeal == 0) {
        indexR = readlineSync.keyInSelect(milkR, 'I recommend you go to one of these restaurants');
        console.log('you chose go to ' + milkR[indexR] + '\nhave a nice time :) ');
       
    }else if(indexMeal == 1){
        indexR = readlineSync.keyInSelect(fleshR, 'I recommend you go to one of these restaurants');
        console.log('you chose go to ' + fleshR[indexR] + '\nhave a nice time :) ');
    }else {
        throw 'stop execution ';
        //process.exit();
    }
};