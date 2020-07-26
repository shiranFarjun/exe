let array1 = ['"Hello"'];
let array2 = ['"AppleSeeds"', '"Bootcamp"']; 

let arrJoinFirst = mergeArrays(array1,array2);
console.log('\nMerge Arrays: \n'+'['+arrJoinFirst+']\n' );

function mergeArrays(arr1,arr2) {
    return arr1.concat(arr2);
}