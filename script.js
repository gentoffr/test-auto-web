let contenedor = document.getElementById("contenedor");
contenedor.innerHTML = "";


function buscar(){
    let leerTexto = document.getElementById("auto").value.toLowerCase();
    fetch("src.json")
    .then(res => res.json())
    .then(data => {
        let auto = data.find(a => a.nombre === leerTexto)
        if(auto)
        {
            console.log(data);
            let nombre = document.createElement("span");
            nombre.textContent = auto.nombre;
            let ancho = auto.ancho;
            let alto = auto.altura;
            let largo = auto.longitud;
            let imagenes = [...auto.imagenes];
            contenedor.appendChild(nombre);
        }
    })
}

