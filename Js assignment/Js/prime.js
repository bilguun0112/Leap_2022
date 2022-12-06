console.log('Prime number algoritm');

let input = Number(prompt("Give me your prime number "));

let temp = 0;
let i = 2;
for( ; i < Math.round(input/2); i++) {
    if ( input % i == 0){
        temp = temp + 1;
    }

}

if (temp == 0 ) {
    console.log("It's prime number");
} else {
    console.log("It isnt prime number");
}