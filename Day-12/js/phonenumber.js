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