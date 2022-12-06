const randomNumber = Math.floor((Math.random() * 10));
alert('1 - 10 hoorond too taana uu?')

console.log(randomNumber);

let n = Number(prompt('Guess Number'));

let diff = Math.abs(randomNumber - n);
for (; n !== randomNumber;) {

    if (n > randomNumber) {

        alert('Таны оруулсан тоо их байна');


    } else {
        alert('Таны оруулсан тоо бага байна');

    }
    n = Number(prompt('Guess Number'))
}
alert('Тоог амжилттай таалаа');