function buscar(str){
    fetch("C:\Users\frang\Desktop\Proy mini\src.json")
    .then(res => res.json())
    .then(data => {
        let auto = data.find(a => a.nombre === str)
        if(auto)
        {
            let nombre = document.createElement("n");
            nombre.textContent = auto.nombre;
            let ancho = auto.ancho;
            let alto = auto.altura;
            let largo = auto.longitud;
            let imagenes = [...auto.imagenes];
            contenedor.appendChild(nombre)
        }
        
    })
}
let contenedor = document.getElementById("contenedor");
contenedor.innerHTML = "";
let leerTexto = document.getElementById("auto").value.toLowerCase();
