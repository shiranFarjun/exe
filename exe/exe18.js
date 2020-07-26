let myArr= [1,2,3];
console.log('\nMy array befor reverse method: '+myArr+'\n');
reverseArray(myArr)
console.log('\nMy array after reverse method: ['+myArr+']\n');


function reverseArray(myArr){
    return myArr.reverse();
}