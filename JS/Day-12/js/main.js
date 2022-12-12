// // let a = "c"
// // let b = "b"
// // console.log(a < b);

// // console.log(a == b);
// // console.log(a === b);

// // let c = 10;
// // let d = '10';
// // console.log(c == d);
// // console.log(c === d);
// // console.log(c !== d);

// // let e = true;
// // let f = false;
// // console.log(e < f);
// // console.log(e > f);


// // let result = 10;
// // if(result > 10) {
// //     console.log('more than 10');
// // } else {
// //     console.log('less than 10');
// // }

// // result > 10 ? console.log('more than 10') : console.log('less than 10');
// // result > 10 ? (result < 11 ? console.log('test') : console.log('hi')) : console.log('less than 10');

// // const tip1 = 3000;
// // const tip2 = 27500;
// // const tip3 = 100000;

// // 5000 <= tip1 && 30000 >= tip1 ? console.log(tip1 * 0.15 + tip1) : console.log(tip1 * 0.2 + tip1);
// // 5000 <= tip2 && 30000 >= tip2 ? console.log(tip2 * 0.15 + tip2) : console.log(tip2 * 0.2 + tip2);
// // 5000 <= tip3 && 30000 >= tip3 ? console.log(tip3 * 0.15 + tip3) : console.log(tip3 * 0.2 + tip3);

// // let tipResult2 = (5000 >=  tip2 && 30000 >= tip2 ? tip2 * 0.15 +tip2 : tip2 * 0.2 +tip2)
// // console.log(tipResult2);
// // let tipResult3 = (5000 >=  tip3 && 30000 >= tip3 ? tip3 * 0.15 +tip3 : tip3 * 0.2 +tip3)
// // console.log(tipResult3);

// // // const input = prompt('Gimme your money');
// // // const numberInput = Number(input);
// // // const numberInputPrompt = Number(prompt('Gimme your money'));


// const studentPoint = Number(prompt('Give me your score'));
// const studentName = prompt('Give me your student name');
// let studentResult = 'Маш муу';
// if (studentPoint < 60) {
//     alert(studentName + ' - ' + studentPoint + ' - ' + studentResult);
// }
// else if (studentPoint >= 60 && studentPoint < 70) {
//     studentResult = 'Хангалттай';
// }
// else if (studentPoint >= 70 && studentPoint < 80) {
//     studentResult = 'Дунд';
// }
// else if (studentPoint >= 80 && studentPoint < 90) {
//     studentResult = 'Сайн';
// }
// else if (studentPoint >= 90 && studentPoint <= 100) {
//     studentResult = 'Маш сайн';
// }
// else {
//     console.log('Та 100 дээш оноо өгөх боломжгүй');
// }
// alert(studentName + ' - ' + studentPoint + ' - ' + studentResult);

// console.log(`${studentName} - ${studentPoint} - ${studentResult}`);

// alert(`Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
// \n\n \t Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
// \n\n \f when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
// \n\n "" It has survived not only five centuries, but also the leap into electronic`)

// console.log('Its log');
// console.error('It is error');

// const str = "Life, the universe and everything.";
// console.log(str.length);
// console.log(str.charAt(0));
// console.log(str[1]);
// console.log(str[32]);
// console.log(str.toLowerCase());
// console.log(str.toUpperCase());

// const registerNumber = prompt('register number');

// if (registerNumber.length != 10) {
//     alert('The register number lenght is not correct')

// } else {
//     alert('The register number lenght is correct')
// }

// console.log(registerNumber[0] + '  '  + registerNumber[1]);

// let firstName = 'John';
// let fullname = firstName.concat(' ','Smith');
// console.log(fullname);
// console.log(firstName);

// let str = "JavaScript String";

// console.log(str.substr(0 , 10));
// console.log(str.substr(11 , 6));

// // Registriin dugaar shalgah
// const registerNumber = prompt('register number');
// let registerChar = registerNumber.substr(0, 2);
// let registerNum = registerNumber.substr(3, 10);

// // console.log(registerNumber.substr(2, 11));
// // console.log(registerNumber.substr(0, 2));

// if (!Number.isInteger(Number(registerChar)) && Number.isInteger(Number(registerNum)) && registerNumber.length == 10) {
//    console.log('Correct');
// } else {
//     console.log('Wrong');
// }


// if (Number.isInteger(registerNum) == true) {
//     console.log('Correct');
//  } else {
//      console.log('Wrong');
//  }


// console.log(Number('abc'));
// console.log(Number.isInteger(Number('abc')));
// console.log(Number('12345678'));
// console.log(Number.isInteger(Number('124356789')));



// Validate phone number

let phoneNumber = prompt('Dugaaraa oruulna uuu');
let codeMgl = '+976';
let cMgl = codeMgl.substr(0,4);
let cNumber = phoneNumber.substr(4,12);
// console.log(cMgl)
if (codeMgl == '+976' && Number.isInteger(Number(cNumber)) && phoneNumber.length == 12) {
    console.log('та монгол улсын утасны дугаарыг зөв орууллаа');
} else {
    console.log('та монгол улсын утасны дугаарыг буруу орууллаа');
}