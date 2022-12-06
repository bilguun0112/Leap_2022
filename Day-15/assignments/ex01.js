// given number of arrays = 1, 2 ,5 , 3, 6 ,7, 8
//let's find out which numbers are even
//if the number is even, then print out the number
// you have to use for loop


let numbers = [1, 2, 5 , 3, 5, 6, 7, 8 , 10];

console.log('Even');
for(i = 0 ; i < numbers.length; i++){
    if (numbers[i] % 2 == 0){
        console.log(numbers[i]);
    }
}

// Array item value change

numbers[3] = 6;
console.log(numbers);

let playerNames = ['salah', 'becker', 'diaz', 'mane'];

console.log(playerNames);

playerNames[3] = 'khangai';

console.log(playerNames);

let arrays = [1, 2, 3, 4, 5, 6];
console.log(arrays);

for (i = 0 ;i < arrays.length ; i++) {
    arrays[i] = arrays[i] + 1;

    
}
console.log(arrays);