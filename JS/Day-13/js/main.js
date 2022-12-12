// // Day 13
// console.log(Math.PI);

// //  toFixed butarhai toonii orong helj ogno
// console.log(Math.PI.toFixed(2));

// const budget = 1_000_000_000;
// console.log(budget);

// const degrees = 45;
// let rad = degrees * (Math.PI / 180);
// console.log(rad.toFixed(4));

// // Math.abs ()  2 toonii zoruug ni olohod ashiglagddag

// let a = 5, b = 9;
// const diff = Math.abs(a - b);
// console.log(diff);


// //  Math.ceil() / deeshee buhehldene/  butarhai utga ogohod buhel utga bolgoj huvirgadag

// console.log(Math.ceil(.95));
// console.log(Math.ceil(4));
// console.log(Math.ceil(9.04));
// console.log(Math.ceil(-7.004));

// //  Math.floor() /dooshoo buheldene / 

// console.log(Math.floor(.95));
// console.log(Math.floor(4));
// console.log(Math.floor(9.04));
// console.log(Math.floor(-7.004));

// // Math.round() /0.5s deesh doosh buheldene/

// console.log(Math.round(.9));
// console.log(Math.round(5.95), Math.round(5.5), Math.round(5.45));
// console.log(Math.round(-5.95), Math.round(-5.5), Math.round(-5.45));

// // Math.max() ogogdson toonii ihiig olno
// console.log(Math.max(1,2,3));
// console.log(Math.max(-1,-2,-3));

// // Math.mix() ogogdson toonii bagiig olno
// console.log(Math.min(1,2,3));
// console.log(Math.min(-1,-2,-3));

// // Math.pow() zereg oldog
// console.log(Math.pow(7,3));


// let y = Math.pow(Number(prompt("Gimme y")),2);
// let z = Math.pow(Number(prompt("Gimme z")),2);
// let x = Math.sqrt(y + z)
// console.log(x);

//  math.random()
// console.log(Math.floor(Math.random() * 6 +1 ));

// let a = Number(prompt('Duriin toogoo og'))
// let b = Number(prompt('Duriin toogoo og'))

// let max = Math.max(a,b);
// let min = Math.min(a,b);
// let z = Math.floor(Math.random() * (max - min) + min)
// 
// console.log(Math.floor(Math.random() * (max - min) + min));
// console.log(Math.floor(Math.random() * (max - min) + min));
// console.log(Math.floor(Math.random() * (max - min) + min));
// console.log(Math.floor(Math.random() * (max - min) + min));
// console.log(Math.floor(Math.random() * (max - min) + min));
// console.log(Math.floor(Math.random() * (max - min) + min));
// console.log(Math.floor(Math.random() * (max - min) + min));
// console.log(Math.floor(Math.random() * (max - min) + min));
// console.log(Math.floor(Math.random() * (max - min) + min));
// console.log(Math.floor(Math.random() * (max - min) + min));
// console.log(Math.floor(Math.random() * (max - min) + min));
// console.log(Math.floor(Math.random() * (max - min) + min));
// console.log(Math.floor(Math.random() * (max - min) + min));
// console.log(Math.floor(Math.random() * (max - min) + min));


//  WHILE 

// let count = 1;
// while (count <= 10) {
//     console.log(count);
//     count = count + 1;
// }

// while (z <= 100) {
//     console.log(z);
//     z = z + 1;
// }
// // 1r arga
// let question = prompt('Та тоглоомоо үргэлжлүүлэх үү?')
// let a = ('yes');
// let b = ('no')
// while (question == a) {
//     alert('Welcome ot infinite cycle xoxoxoxoxo');
//     question = prompt('Та тоглоомоо үргэлжлүүлэх үү?')
// }
// alert('Game Over');

// //2r arga
// let answer = "yes";

// while (answer == "yes") {
//     answer = prompt('Do you wanna continue the game ?').toLowerCase();
//     if (answer == "yes") {
//         alert("thanks");
//     }
// }
// alert('Game Over');
let count = 0;
let n = Number(prompt('Shidet too'));
let sum = 0;
while (count < n) {
    // console.l    g(count);
    count = count + 1;
    sum = sum + count;
    console.log(sum);
}