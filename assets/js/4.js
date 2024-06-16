let azul = document.querySelector("#azul")
let rojo = document.querySelector("#rojo")
let verde = document.querySelector("#verde")
let amarillo = document.querySelector("#amarillo")

azul.addEventListener("click", function () {
    azul.style.backgroundColor = "black"
})

rojo.addEventListener("click", function () {
    rojo.style.backgroundColor = "black"
})

verde.addEventListener("click", function () {
    verde.style.backgroundColor = "black"
})

amarillo.addEventListener("click", function () {
    amarillo.style.backgroundColor = "black"
})

let colorear = document.querySelector("#key")
let contenedor = document.getElementById("contenedor");
document.addEventListener('keydown', function (event) {
    if (event.key === 'a') {
        colorear.style.backgroundColor = "pink"
    } else if (event.key === 's') {
        colorear.style.backgroundColor = "orange"
    } else if (event.key === 'd') {
        colorear.style.backgroundColor = "skyblue"
    } else if (event.key === "q") {
        agregarElemento("purple")
    } else if (event.key === "w") {
        contenedor.style.backgroundColor = "gray"
        agregarElemento("gray")
    } else if (event.key === "e") {
        contenedor.style.backgroundColor = "brown"
        agregarElemento("brown")
    }

})

function agregarElemento(color) {
    let nuevoElemento = document.createElement("div");
    nuevoElemento.style.height = "200px"
    nuevoElemento.style.width = "200px"
    nuevoElemento.style.backgroundColor = color
    let elementos = contenedor.querySelectorAll("div")
    if (elementos.length > 0) {
        contenedor.removeChild(elementos[elementos.length - 1]);
    } else {
    contenedor.appendChild(nuevoElemento)
}}