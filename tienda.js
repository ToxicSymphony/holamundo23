//Funcion para llenar dinamicamente
//la tienda

export function llenarTienda() {

    let contenedor = document.getElementById("contenedor")
    let fila2 = document.getElementById("fila2")

    let botonResuelto = document.createElement("button")
    botonResuelto.setAttribute("type", "button")
    botonResuelto.classList.add("btn","btn-outline-dark","mx-3","mb-3")
    botonResuelto.textContent = "Resuelto por"

    fila2.appendChild(botonResuelto)
    contenedor.appendChild(fila2)

    botonResuelto.addEventListener("click", function(evento){
        window.location.href = "./resuelto.html"
    })





    let productos = [

        { nombre: "Batimovil a escala", precio: 400000, foto: "https://firebasestorage.googleapis.com/v0/b/imagenesbatman.appspot.com/o/batimovil.webp?alt=media&token=5ffac789-8099-4433-8720-b3c6e4c9adee", descripcion: "Batimovil a escala de la ultima pelicula" },
        { nombre: "Camiseta Batman", precio: 80000, foto: "https://firebasestorage.googleapis.com/v0/b/imagenesbatman.appspot.com/o/camiseta.jpg?alt=media&token=57303d4b-d8ab-46d7-b550-77ab69c7b425", descripcion: "Camiseta original DC" },
        { nombre: "Gorra Batman", precio: 50000, foto: "https://firebasestorage.googleapis.com/v0/b/imagenesbatman.appspot.com/o/gorra.png?alt=media&token=2b88095c-cd82-4c27-98a6-270735cd347e", descripcion: "Gorra original DC" },
        { nombre: "Bati termo DC", precio: 35000, foto: "https://firebasestorage.googleapis.com/v0/b/imagenesbatman.appspot.com/o/batitermo.webp?alt=media&token=928cda31-8ca4-454c-a2e0-c000aa78af29", descripcion: "Termo para bati chocolate" },
        { nombre: "Batmav v Superman", precio: 300000, foto: "https://firebasestorage.googleapis.com/v0/b/imagenesbatman.appspot.com/o/batmanVSuperman.jpg?alt=media&token=10febe29-d810-49ee-bc17-598d9181fd81", descripcion: "Imagen a escala de la pelicula Batman v Superman" },
        { nombre: "Bati morral Totto", precio: 80000, foto: "https://firebasestorage.googleapis.com/v0/b/imagenesbatman.appspot.com/o/batman%20morral.jpg?alt=media&token=af820a42-6211-40e0-8a54-0d6816957da0", descripcion: "Bolso original DC" },
        { nombre: "Silla Gaming Batman", precio: 2000000, foto: "https://firebasestorage.googleapis.com/v0/b/imagenesbatman.appspot.com/o/silla%20Batman.webp?alt=media&token=4bfbefbf-f6d8-4ed5-ac8a-9d4b393200be", descripcion: "Silla comoda y original DC" },
        { nombre: "caja de comics Batman", precio: 300000, foto: "https://firebasestorage.googleapis.com/v0/b/imagenesbatman.appspot.com/o/caja%20comics.jpg?alt=media&token=671dde3a-680c-4da0-9767-b943a90a4222", descripcion: "comics Batman originales" },
        { nombre: "Bati caja sorpresa", precio: 250000, foto: "https://firebasestorage.googleapis.com/v0/b/imagenesbatman.appspot.com/o/bati%20misterybox.jpg?alt=media&token=a6b811ba-9ff6-49c6-a6b6-18eaa09e015a", descripcion: "Caja sorpresa con productos de batman" },
        { nombre: "Bati lonchera totto", precio: 80000, foto: "https://firebasestorage.googleapis.com/v0/b/imagenesbatman.appspot.com/o/bati%20lonchera.jpg?alt=media&token=e6d9c0f9-7c81-4806-87a0-5e949541f80a", descripcion: "Lonchera para llevar tus bati alimentos" }

    ]

    //Rutina para recorrer el arreglo y crear las tarjetas de cada producto

    //1. crear una referencia a un elemento "PADRE" o "BASE" donde anclaremos los demas
    let fila = document.getElementById("fila")
    //2. Necesito recorrer un arreglo
    productos.forEach(function (producto) {

        //3. CREAMOS LOS ELEMENTOS NECESARIOS PARA PINTAR LOS PRODUCTOS
        let columna = document.createElement("div")
        columna.classList.add("col-md-4")

        let tarjeta = document.createElement("div")
        tarjeta.classList.add("card","h-100", "shadow", "text-center", )
        

        let imagen = document.createElement("img")
        imagen.classList.add("img-fluid","card-img-top","p-3","w-100")
        imagen.src = producto.foto

        let separador = document.createElement("hr")
        separador.classList.add("w-50","mx-auto","d-block")
        

        let nombre = document.createElement("h5")
        nombre.classList.add("fw-bold", "text-center", "mx-3")
        nombre.textContent = producto.nombre

        let precio = document.createElement("h6")
        precio.classList.add("text-center","text-muted")
        precio.textContent = producto.precio

        let botonAmpliarInfo = document.createElement("button")
        botonAmpliarInfo.setAttribute("type", "button")
        botonAmpliarInfo.classList.add("btn","btn-outline-dark","mx-3","mb-3")
        botonAmpliarInfo.textContent = "Ver producto"


        //VAMOS A ANCLAR (PONER)(DISPONER) LAS ETIQUETAS
        //QUE ACABAMOS DE CREAR EN NUESTRA BASE
        tarjeta.appendChild(imagen)
        tarjeta.appendChild(separador)
        tarjeta.appendChild(nombre)
        tarjeta.appendChild(precio)
        tarjeta.appendChild(botonAmpliarInfo)

        columna.appendChild(tarjeta)
        fila.appendChild(columna)
        // fila.appendChild(columna)
        // columna.appendChild(tarjeta)
        // tarjeta.appendChild(imagen)
        // tarjeta.appendChild(separador)
        // tarjeta.appendChild(nombre)
        // tarjeta.appendChild(precio)
        // tarjeta.appendChild(botonAmpliarInfo)



    })

    



}

llenarTienda()