let input = prompt('Hello World');
let upperLetter = 'A';
let lowerLetter = 'a';

const array = input.split(" ");


for (var i = 0; i < array.length; i++) {
    if (array[i].charAt(0) === upperLetter) {
        array[i] = array[i].charAt(0).toLowerCase() + array[i].slice(1);
    } else
    //  if (array[i].charAt(0) === lowerLetter) 
    {
        array[i] = array[i].charAt(0).toUpperCase() + array[i].slice(1);
    }
}
let output = array.join(" ");
console.log(output);