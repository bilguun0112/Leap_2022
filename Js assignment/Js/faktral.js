let N = Number(prompt('Number'));
let R = 1;

for (; N > 0;) {
    R = R * N;
    F = R * N;
    N = N - 1;
}
alert(F);