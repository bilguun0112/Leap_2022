// let green = document.querySelector("img").src = "./images/green.jfif";

// document.getElementsByClassName("colorGreen").addEventListener("click", green)


let green = document.querySelector("colorGreen");

green.addEventListener("click", () => {
    document.querySelector("img").style = "width: 100%"
})

// document.querySelector("img").src = "./images/green.jfif";

function changeGreen() {
    let image = document.getElementById('clothes');
    image.src = "./images/green.jfif";

}

function changeRed() {
    let image = document.getElementById('clothes');
    image.src = "./images/red.jfif";

}

function changeNavy() {
    let image = document.getElementById('clothes');
    image.src = "./images/navy.jfif";

}

function changeAqua() {
    let image = document.getElementById('clothes');
    image.src = "./images/aqua.jfif";

}