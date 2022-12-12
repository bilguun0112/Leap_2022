// 1 Хамгийн эхний li элементийг аван утгыг console.log дээр хэвлэх
console.log(document.getElementById("aimag-101").innerHTML);

// 2 Хамгийн сүүлийн li элементийг аван утгыг console.log дээр хэвлэх
console.log(document.getElementById("aimag-522").innerHTML);

// 3 Сүхбаатар аймгийг элементийн id-аар аван console.log дээр хэвлэх

console.log(document.getElementById("aimag-315").innerText);

// 4 Тухайн жагсаалтын элементүүдэд загвар оруулах (текстийн фонт, хэмжээ, текстийн өнгө, хүрээ, padding, margin)
for (let i = 0; i < document.getElementById("aimagNames").getElementsByTagName("li").length; i++) {

    document.getElementById("aimagNames").getElementsByTagName("li")[i].style = "color: brown; font-size: 20px;"

}
// 5 Аймгуудыг бүс, бүсээр ялган өөр, өөр background color  өгөх

for (let i = 0; i < document.getElementById("aimagNames").getElementsByTagName("li").length; i++) {
    if (document.getElementById("aimagNames").getElementsByTagName("li")[i].id.includes("aimag-1")) {
        document.getElementById("aimagNames").getElementsByTagName("li")[i].style = "background-color: blue"
    }
}
for (let i = 0; i < document.getElementById("aimagNames").getElementsByTagName("li").length; i++) {
    if (document.getElementById("aimagNames").getElementsByTagName("li")[i].id.includes("aimag-2")) {
        document.getElementById("aimagNames").getElementsByTagName("li")[i].style = "background-color: aqua"
    }
}
for (let i = 0; i < document.getElementById("aimagNames").getElementsByTagName("li").length; i++) {
    if (document.getElementById("aimagNames").getElementsByTagName("li")[i].id.includes("aimag-3")) {
        document.getElementById("aimagNames").getElementsByTagName("li")[i].style = "background-color: antiquewhite"
    }
}
for (let i = 0; i < document.getElementById("aimagNames").getElementsByTagName("li").length; i++) {
    if (document.getElementById("aimagNames").getElementsByTagName("li")[i].id.includes("aimag-4")) {
        document.getElementById("aimagNames").getElementsByTagName("li")[i].style = "background-color: greenyellow"
    }
}
for (let i = 0; i < document.getElementById("aimagNames").getElementsByTagName("li").length; i++) {
    if (document.getElementById("aimagNames").getElementsByTagName("li")[i].id.includes("aimag-5")) {
        document.getElementById("aimagNames").getElementsByTagName("li")[i].style = "background-color: red"
    }
}