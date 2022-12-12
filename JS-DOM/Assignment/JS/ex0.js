// 1 Хамгийн эхний li элементийг аван утгыг console.log дээр хэвлэх
console.log(document.getElementById("aimag-101").innerHTML);

// 2 Хамгийн сүүлийн li элементийг аван утгыг console.log дээр хэвлэх
console.log(document.getElementById("aimag-522").innerHTML);

// 3 Сүхбаатар аймгийг элементийн id-аар аван console.log дээр хэвлэх

console.log(document.getElementById("aimag-315").innerText);

// 4 Тухайн жагсаалтын элементүүдэд загвар оруулах (текстийн фонт, хэмжээ, текстийн өнгө, хүрээ, padding, margin)

document.getElementById("aimagNames").getElementsByTagName("li")[0].style = "color: red"

// document.getElementsByTagName("li").style = "color: red"
// for(let i = 0; i < document.getElementsByClassName("khangai").length; i++){
//     document.getElementsByClassName("khangai")[i].style = "background-color: blue"
// }
// for(let i = 0; i < document.getElementsByClassName("baruun").length; i++){
//     document.getElementsByClassName("baruun")[i].style = "background-color: aqua"
// }
// for(let i = 0; i < document.getElementsByClassName("Tov").length; i++){
//     document.getElementsByClassName("Tov")[i].style = "background-color: antiquewhite"
// }
// for(let i = 0; i < document.getElementsByClassName("Zuun").length; i++){
//     document.getElementsByClassName("Zuun")[i].style = "background-color: greenyellow"
// }

// document.getElementById("aimag-522").style = "background-color: red"

// document.getElementsByTagName('span')[0].innerHTML = "Span here !!!"

// for(let i = 0; i < document.getElementById("aimagNames").getElementsByTagName("li").length; i++){
//     if (document.getElementById("aimagNames").getElementsByTagName("li")[i].id.includes("aimag-1")){
//         document.getElementById("aimagNames").getElementsByTagName("li")[i].style = "background-color: blue"
//     }
// }
// for(let i = 0; i < document.getElementById("aimagNames").getElementsByTagName("li").length; i++){
//     if (document.getElementById("aimagNames").getElementsByTagName("li")[i].id.includes("aimag-2")){
//         document.getElementById("aimagNames").getElementsByTagName("li")[i].style = "background-color: aqua"
//     }
// }
// for(let i = 0; i < document.getElementById("aimagNames").getElementsByTagName("li").length; i++){
//     if (document.getElementById("aimagNames").getElementsByTagName("li")[i].id.includes("aimag-3")){
//         document.getElementById("aimagNames").getElementsByTagName("li")[i].style = "background-color: antiquewhite"
//     }
// }
// for(let i = 0; i < document.getElementById("aimagNames").getElementsByTagName("li").length; i++){
//     if (document.getElementById("aimagNames").getElementsByTagName("li")[i].id.includes("aimag-4")){
//         document.getElementById("aimagNames").getElementsByTagName("li")[i].style = "background-color: greenyellow"
//     }
// }
// for(let i = 0; i < document.getElementById("aimagNames").getElementsByTagName("li").length; i++){
//     if (document.getElementById("aimagNames").getElementsByTagName("li")[i].id.includes("aimag-5")){
//         document.getElementById("aimagNames").getElementsByTagName("li")[i].style = "background-color: red"
//     }
// }



console.log(document.querySelector('#aimagNames'));
console.log(document.querySelector('.khangai'));


console.log(document.querySelectorAll(".khangai"));
console.log(document.getElementsByClassName("khangai"));

document.querySelector("#demo").innerHTML = "Date : " + Date();

document.querySelector('img').src = "./picture/sc.png"
document.querySelector('img').style = "width: 100%, margin: 0 auto";

// Shine div uusgeed h2 bolgood body dr nemeh uildel

const newDiv = document.createElement("h2");
const newContent = document.createTextNode("Манай сайтад тавтай морил");
newDiv.appendChild(newContent);
const main = document.getElementsByTagName("body");
const h1 = document.querySelector('h1');
h1.appendChild(newDiv);