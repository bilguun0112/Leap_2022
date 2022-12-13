const randColor = () =>  {
    let ranColor = document.getElementsByTagName("body");
    ranColor = "#" + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0').toUpperCase();
    document.getElementById("color").style.background-color = "randColor()"
}

// let colorButton = document.querySelector("#color");

// colorButton.addEventListener("click", () => {
//     document.getElementsByClassName("changeBack")[0].style = "background-color: red"
//     document.getElementById("color").style = "background-color: randColor()"
// });
