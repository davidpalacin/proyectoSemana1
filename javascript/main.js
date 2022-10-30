function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
}

//guardo en arrays las casillas
let casillas = document.querySelectorAll(".casilla");
let casillasPlayerDos = document.querySelectorAll(".casilla-player2");
let fichas = document.querySelectorAll("span");

// pongo ids a las casillas para poder seleccionarlas luego
for (let i = 0; i < casillas.length; i++) {
    casillas[i].id = 'casilla-blanca' + i;
    casillasPlayerDos[i].id = 'casilla-negra' + i;
    fichas[i].id = 'ficha-' + i;  

    casillas[i].setAttribute("ondrop", "drop(event)");
    casillas[i].setAttribute("ondragover", "allowDrop(event)");

    casillasPlayerDos[i].setAttribute("ondrop", "drop(event)");
    casillasPlayerDos[i].setAttribute("ondragover", "allowDrop(event)");
    
    fichas[i].setAttribute("draggable", "true");
    fichas[i].setAttribute("ondragstart", "drag(event)");
}
