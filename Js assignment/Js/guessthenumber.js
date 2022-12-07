const randomNumber = Math.floor((Math.random() * 100));
alert('1 - 100 hoorond too taana uu?')

alert(randomNumber);

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