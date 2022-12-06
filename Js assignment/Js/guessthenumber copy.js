const randomNumber = Math.floor((Math.random() * 40));

console.log(randomNumber);

let n = Number(prompt('Guess Number'));
let a = '10 дотор зөрүүллээ';
let b = '20 дотор зөрүүллээ';
let c = '30 дотор зөрүүллээ';
let diff = Math.abs(randomNumber - n);
for (; n !== randomNumber;) {

    if (n > randomNumber) {
        // if (0 <= diff <= 10) {
        //     alert('Таны оруулсан тоо их байна' + ' ' + a);
        // } else if (10 <= diff <= 20) {
        //     alert('Таны оруулсан тоо их байна' + ' ' + b);
        // } else if (20 <= diff <= 30) {
        //     alert('Таны оруулсан тоо их байна' + ' ' + c);
        // }
        switch ((n > randomNumber)) {
            case (0 <= diff <= 10):
                alert('Таны оруулсан тоо их байна' + ' ' + a);
                break;
            case (10 <= diff <= 20):
                alert('Таны оруулсан тоо их байна' + ' ' + b);
                break;
            default:
                alert('Таны оруулсан тоо их байна');
                break;
        }

    } else {
        alert('Таны оруулсан тоо бага байна');

    }
    n = Number(prompt('Guess Number'))
}
alert('Тоог амжилттай таалаа');