var mostrarLista = document.querySelector("#botonAbrir")

var mostrarLista = () =>{
    lista.style.display = "block"
}

botonAbrir.onclick = mostrarLista

var cerrarLista = document.querySelector("#botonCerrar")

var cerrarLista = () =>{
    lista.style.display = "none"
}

botonCerrar.onclick = cerrarLista

$( function() {
    $("#dialog").dialog();
  } );