// let count = 1;
// let n = Number(prompt('Shidet too'));
// let sum = 0;
// while (count < n) {
//     // console.l    g(count);
//     count = count + 1;
//     sum = sum + count;
//     console.log(sum);
// }

let start = 1;
const max = 10;
while (start <= max) {
  if (start % 2 == 0) {
    console.log(start);
  }
  start = start + 1;
  // console.log(start);
}

for (let i = 1; i <= max; i++) {
  if (i % 2 == 0) {
    console.log(i);
  }
}
console.log('1 - 20 hurtelh sondgoi too hevleh');

let star = 1;
const maxim = 20;
while (star <= maxim) {
    if (star % 2 != 0) {
        console.log(star);

}
    star = star + 1;
    // console.log(start);
}

for (let star = 1; star <= maxim; star++) {
    if (star % 2 != 0) {
        console.log(star)
    }
}
console.log('Life is beutiful');

let str = ('life is beautiful');
let count = 0;
let length = str.length;

// while (length--)  {
//     console.log(str.charAt(length));
//     // count = count + 1;
// }

for (let count = 0;  length-- ; console.log(str.charAt(length))) {    
}
