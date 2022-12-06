let n = Number(prompt('Gimme number'));
let i = 0;
for (; n !== 0;) {
    i = i + 1;
    n = Math.floor(n / 10);

}
console.log(i);