// function pow(number, exponent) {
//     let multiply = 1;
//     for(let i = 1 ; i <= exponent ; i++){
//         multiply = multiply * number;
//     }
//     return multiply;
// }

// let result = pow (5 , 2);

// console.log(result);

function findMIn (numberOne , numberTwo){
    if (numberOne > numberTwo) {
        return numberTwo + true;
    } else {
        return numberOne + false;
    }
}
console.log(findMIn(2,5));

let arr = [1, 2, 3, 4, 5, 7];

function printArray (array) {
    for(let i = 0; i < array.length; i++){
        array[i];
    }
    return console.log(array);
}


printArray(arr);

let myArray = [1, 40, 50, 3, 100, 5];

console.log('Ex 03 begins');

let findarrayMax = function (arr) {
    let max = -1;
    for(let i = 0 ; i < arr.length; i++){
        if(max <= arr[i]){
            max = arr[i];
        }
    }
    return max;
}

console.log(findarrayMax(myArray));

console.log('Ex 04 begins');

let findArrayAverage = (x) => {
    let sum = 0;
    for (let i = 0 ; i < x.length; i++) {
        sum = sum + x[i];
    }
    const average = sum / x.length;
    return average;
}

console.log(findArrayAverage(myArray));
