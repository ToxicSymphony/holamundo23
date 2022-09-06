let fila3 = document.getElementById("fila2")

let botonVolver = document.createElement("button")
botonVolver.setAttribute("type", "button")
botonVolver.classList.add("btn","btn-outline-dark","mx-3","mb-3")
botonVolver.textContent = "Volver"

fila3.appendChild(botonVolver)

botonVolver.addEventListener("click", function(evento){
    window.location.href = "./index.html"
})
