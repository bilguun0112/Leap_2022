// let input = prompt('Hello World');
let input = "Hello"
let upperLetter = 'A';
console.log('upper => ', typeof upperLetter);
let lowerLetter = 'a';

const array = input.split(" ");

console.log(input);
// console.log(input.charAt(0).toLowerCase());

for (var i = 0; i <= input.length; i++) {
    debugger;
    if (input.charAt(i) === upperLetter) {
        input = input.charAt(i).toLowerCase();
    } else
    if (input.charAt(i) === lowerLetter) {
        input = input.charAt(i).toUpperCase();
    }
}

console.log(input);