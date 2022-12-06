let N = Number(prompt('Number'));
let C = N;
let R = 0;
for (; N !== 0;) {
    L = N % 10;
    R = R * 10 + L;
    N = Math.floor(N / 10);

}
if (R == C) {
    alert('True');
} else {
    alert('False');
}