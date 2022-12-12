// Click to change bg color
let colorButton = document.querySelector("#ex1");

colorButton.addEventListener("keydown", () => {
    document.getElementsByClassName("changeBack")[0].style = "background-color: red"
    document.getElementsByClassName("changeBack")[1].style = "background-color: yellow"
});