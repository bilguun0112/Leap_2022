let f1 = 0,
    f2 = 1,
    n = 0;
let m = Number(prompt("Gimme number"));

for (; n <= m; n++) {
    console.log(f1);
    f3 = f1 + f2;
    f1 = f2;
    f2 = f3;
}