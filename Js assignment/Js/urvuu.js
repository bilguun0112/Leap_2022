let N = Number(prompt('Number'));
let R = 0;


for (; N != 0;) {
    L = N % 10;
    R = R * 10 + L;
    N = Math.floor(N / 10);
}
alert(R);