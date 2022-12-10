// Ex02 - JS method

let array = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];


console.log('First' + ' : ' + array.sort());
console.log('Second' + ' : ' + array.reverse());
array.shift();

console.log('Third' + ' : ' + array);

let middle = array.length / 2 - 1;
// array.splice(middle,2); // google facebook

if (middle % 2 == 0) {
    array.splice(middle, 2)
} else {
    array.splice(middle, 1)
}

console.log('Fourth' + ' : ' + array);

array.pop();

console.log('Fifth' + ' : ' + array);

// for (let i = array.length ; i >= 0 ; i--) {
//     array.splice(i,1);
// }

array.splice(0, array.length);

console.log('Sixth' + ' : ' + array);