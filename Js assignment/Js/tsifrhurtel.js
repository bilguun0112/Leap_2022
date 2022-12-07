let input = Number(prompt('Цифрээ өгнө үү'));
console.log("Даалгавар 1");

for (let i = 0; i < input; i++) {
    console.log(i);
}

console.log("Даалгавар 2");
for (let j = 10; j > input;) {
    j = j - 1;
    console.log(j);
}