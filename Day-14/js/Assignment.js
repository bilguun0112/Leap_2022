// //  1 natural too hevleh
// // let naturalNumber = 0;
// // while (naturalNumber < 10) {
// //     naturalNumber = naturalNumber + 1;
// //     console.log(naturalNumber);
// // }

// for (let naturalNumber = 1; naturalNumber <= 10; naturalNumber++) {
//     console.log(naturalNumber);
// }

// // 9 ogogdson toonii niilber oloh
// // 1 arga 
// let i = prompt('Too');
// let count = 0;
// let sum = 0;
// // while (count < i.length) {
// //     // console.log(i.charAt(count));
// //     sum = sum + Number(i.charAt(count));
// //     count = count + 1;
// // }
// // console.log(sum);

// for (let count = 0; count < i.length; count++) {
//     sum = sum + Number(i.charAt(count));
// }
// console.log(sum);

//2r arga
let sum = 0;
let rem = 0;
// let N = Number(prompt("Gimme number"));
// while (N > 0) {
//     rem = N % 10;
//     sum = sum + rem;
//     N = Math.floor(N / 10);
    
// }
// console.log(sum);

for (let N = Number(prompt("Gimme number")); N > 0; N = Math.floor(N / 10)) {
        rem = N % 10;
        sum = sum + rem;
    }
    console.log(sum);