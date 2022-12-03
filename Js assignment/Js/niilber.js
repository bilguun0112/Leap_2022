N = Number(prompt('Дурын тоогоо бичнэ үү'))
let sum = 0;

for (; N != 0;) {
    U = N % 10;
    sum = sum + U;
    N = Math.floor(N / 10);
}
alert(sum);