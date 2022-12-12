// // let b = 'Baby Shark, ';
// // let d = 'doo-doo, ';
// // let m = 'Mommy Shark, ';

// // console.log(b + d + d);
// // console.log(b + d + d);
// // console.log(b + d + d);

// // console.log(b);
// // console.log(m + d + d);
// // console.log(m + d + d);
// // console.log(m + d + d);
// // console.log(m);

// let myNumber = 5;
// let undefy;
// let nullVariable = null;
// let myDecision = true;
// // typeof

// console.log(typeof 1);
// console.log(typeof "Hello");
// console.log(typeof undefy);
// console.log(typeof nullVariable);
// console.log(typeof myDecision);
// console.log(myDecision)

// //Alert

// let x = 2;
// let y = 3;
// let z = 1;

// // alert(x*x + y*y -z*z*z/240*175);

// console.log(7%2);
// console.log(36%19);

// let result = '30' - 10;
// console.log(result);
// //  Toirgiin urt
// let p = "Urt ";
// const pi = 3.14;
// let r = 4;
// // console.log(p + (2 * pi * r));
// // alert(p + (2 * pi * r));
// // Trapezoid
// let s = 'Talbai '
// let a = 9;
// let b = 8;
// let h = 7;
// console.log(s + (a + b) * 0.5 * h);
// // alert(s + (a + b) * 0.5 * h);

// let bottom = prompt('Please give me your bottom');
// let test = prompt('Please give me your top');
// let height = prompt('Please give me your height');
// let trapezoidArea = ((bottom + test) * 0.5 * height);
// alert (trapezoidArea);
// let a = prompt('Give me your number');
// let b = prompt('Give me your number');
// // let b = 5;

// if(a < b) {
//     console.log('its true');
// } else {
//     console.log('its false');
// }


// Nas Olson
// let yearOfBirth = prompt("tell me your birth year");
// let old = 2022 - yearOfBirth;
// console.log("Tanii nas " + old);

// if (0 <= old && old <= 1) {
//   console.log("Infant");
// } else if (1 < old && old <= 3) {
//   console.log(" Toddler ");
// }   else if (3 < old && old <= 5) {
//   console.log("PreSchool");
// } else if (5 < old && old <= 12) {
//   console.log("Gradeschooler");
// } else if (12 < old && old <= 18) {
//   console.log("Teen");
// } else if (18 < old && old <= 21) {
//   console.log("Young adult");
// } else {
//   console.log("Adult");
// }


// // Tegsh sondgoi oloh
// let RandomNumber = prompt('Number');
// let tegsh = RandomNumber % 2 ;
// if (tegsh == 0 ) {
//     console.log("Tegsh");
// } else {
//     console.log('Songdgoi');
// }

// // BMI uzeh
// let weight = prompt('Weight');
// let height = prompt('height') / 100;
// let bmi = weight / (height * height) ; 
// if (bmi < 18.5) {
//     console.log('under weight')
// } 
// else if (bmi > 18.5 && bmi < 24.9){
//     console.log('Normal');
// }
// else if (bmi > 25 && bmi < 29.9){
//     console.log('over weight');
// }
// else if (bmi > 30 && bmi < 39.9){
//     console.log('obesity');
// }
// else {
//     console.log('extreme obesity');
// }

// // 3 7 giin urjver
// let num = prompt('Number')
// let num3 = num % 3;
// let num7 = num % 7;
//  if (num3 == 0 || num7 == 0 ) {
//     console.log('Huvaagdana');
//  } else {
//     console.log('Huvaagdahgui');
//  }






// //          Switch
// let day = prompt(" Odroo oruulna uu");
// // console.log(typeof day);

// let dayNumber = Number(day);
// // console.log(dayNumber);
// // console.log(typeof(dayNumber));

// let dayName;
// switch (dayNumber) {
//     case 1:
//         dayName = 'Monday';
//         break;
//     case 2:
//         dayName = 'Tuesday';
//         break;
//     case 3:
//         dayName = 'Wednesday';
//         break;
//     case 4:
//         dayName = 'Thursday';
//         break;
//     case 5:
//         dayName = 'Friday';
//         break;
//     case 6:
//         dayName = 'Saturday';
//         break;
//     case 7:
//         dayName = 'Sunday';
//         break;

//     default:
//         dayName = 'Invalid day'

// }
// console.log(dayName);

let n = prompt("Utga");
if (n >= 0) {
    console.log('Positive');
} else {
    console.log('Negative');
}