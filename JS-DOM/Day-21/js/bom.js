console.log('bom js');

// // window.alert('Hello')

// console.log(window);

// // window.open('https://google.com', 'Hello');



// // let result = window.confirm('Do you wanna to Quit?');
// // console.log(result);

// let result = confirm('Ta ustgahdaa itgeltei bn uu ?');

// let message = result ? 'Ta OK tovchiig darlaa' : 'Ta Cancel tovchiig darsan' ;

// alert(message);

let alertButton = document.getElementById('alertButton');
let cancelButton = document.getElementById('cancelButton');
let timeoutID;

// function showAlert() {
//     timeoutID = setTimeout(alert, 3000, 'setTimeout Demo')
// }

// function clearAlert() {

// }

alertButton.addEventListener('click', () => {
    timeoutID = setTimeout(alert, 3000, 'setTimeout Demo')
})

cancelButton.addEventListener('click', () => {
    console.log(timeoutID);
    clearTimeout(timeoutID);
    
})
console.log(timeoutID);

setTimeout(() => {
    console.log('Time out is running');
}, 5000);

let counter = 0;

// setInterval(startInterval, 1000);

function startInterval(){
    let now = new Date();
    let myTimer = document.getElementById("myTimer");
    myTimer.innerHTML = now;
    counter++;
}

let startTimer = document.getElementById("startTimer")
startTimer.addEventListener('click', runTimerInterval);

function runTimerInterval () {
    window.setInterval(startInterval, 1000);
}