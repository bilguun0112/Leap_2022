console.log("events");

let myButton = document.getElementById("myButton");
console.log(myButton);

// function changeBackgroundGreen () {
//     myButton.style = "background-color: green"
// }
// function changeBackgroundWhite () {
//     myButton.style = "background-color: white"
// }

// changeBackgroundColor();
let color = 'green';
function changeColors() {
    console.log('clicked');
    if(color === 'green'){
        
        myButton.style = `background-color: ${color}`;
        color = 'white';
    } else {
        
        myButton.style = `background-color: ${color}`;
        color = 'green';
    }
}
// myButton.addEventListener("click", changeColors) 

// myButton.addEventListener("click", changeBackgroundGreen());
// myButton.addEventListener("click", changeBackgroundWhite());


let arrowFunc = () => {

}


myButton.addEventListener('click',() => {
    myButton.style = "background-color: aqua"
})


let registerButton = document.querySelector('#register');
registerButton.disabled = true;

// Click to change bg color
let colorButton = document.querySelector("#ex1");

colorButton.addEventListener("keydown", () => {
    document.getElementsByClassName("changeBack")[0].style = "background-color: red"
    document.getElementsByClassName("changeBack")[1].style = "background-color: yellow"
});